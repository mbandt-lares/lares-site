"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef, type ReactNode } from "react";

type MotionEffect = "settle" | "greet" | "wave" | "messages" | "sequence" | "hero";

type MotionSceneProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
  effect: MotionEffect;
  children: ReactNode;
};

const easeOut = "cubic-bezier(.22,1,.36,1)";
const easeInOut = "cubic-bezier(.45,0,.55,1)";

function playItem(target: HTMLElement, effect: MotionEffect, index: number): Animation | undefined {
  if (typeof target.animate !== "function") return;
  if (effect === "wave") {
    return target.animate(
        [
          { offset: 0, transform: "scaleY(1)", transformOrigin: "center bottom", easing: easeInOut },
          { offset: .24, transform: "scaleY(.4)", transformOrigin: "center bottom", easing: easeInOut },
          { offset: .48, transform: "scaleY(1)", transformOrigin: "center bottom", easing: easeInOut },
          { offset: .72, transform: "scaleY(.55)", transformOrigin: "center bottom", easing: easeInOut },
          { offset: 1, transform: "scaleY(1)", transformOrigin: "center bottom" },
        ],
      { duration: 1200, delay: Math.min(index * 50, 200), easing: "linear", fill: "backwards" },
    );
  }

  if (effect === "messages") {
    return target.animate(
      [{ opacity: .25, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 550, delay: Math.min(index * 160, 320), easing: easeOut, fill: "backwards" },
    );
  }

  return target.animate(
    [{ opacity: .2, transform: "translateY(20px)" }, { opacity: 1, transform: "translateY(0)" }],
    { duration: 700, delay: (effect === "hero" ? 100 : 0) + Math.min(index * 110, 330), easing: easeOut, fill: "backwards" },
  );
}

function playEffect(root: HTMLDivElement, effect: MotionEffect): Animation[] {
  if (effect === "settle") {
    return [root.animate(
      [{ transform: "translateY(18px)" }, { transform: "translateY(0)" }],
      { duration: 800, easing: easeOut },
    )];
  }

  if (effect === "greet") {
    const body = root.animate(
      [
        { offset: 0, transform: "translateY(0) rotate(0deg)", easing: easeInOut },
        { offset: .45, transform: "translateY(-8px) rotate(-6deg)", easing: easeInOut },
        { offset: .72, transform: "translateY(0) rotate(2deg)", easing: easeInOut },
        { offset: 1, transform: "translateY(0) rotate(0deg)" },
      ],
      { duration: 1400, easing: "linear" },
    );
    const eyes = Array.from(root.querySelectorAll<HTMLElement>("[data-motion-eye]")).flatMap((eye) => {
      if (typeof eye.animate !== "function") return [];
      return [eye.animate(
        [
          { offset: 0, transform: "translate(0, 0)", easing: easeInOut },
          { offset: .3, transform: "translate(.6%, -.2%)", easing: easeInOut },
          { offset: .55, transform: "translate(.6%, -.2%)", easing: easeInOut },
          { offset: 1, transform: "translate(0, 0)" },
        ],
        { duration: 1400, easing: "linear" },
      )];
    });
    const shadow = root.parentElement?.querySelector<HTMLElement>("[data-motion-shadow]");
    const shadowAnimation = shadow && typeof shadow.animate === "function" ? shadow.animate(
      [
        { offset: 0, transform: "scaleX(1)", opacity: 1, easing: easeInOut },
        { offset: .45, transform: "scaleX(.94)", opacity: .82, easing: easeInOut },
        { offset: 1, transform: "scaleX(1)", opacity: 1 },
      ],
      { duration: 1400, easing: "linear" },
    ) : undefined;
    return shadowAnimation ? [body, ...eyes, shadowAnimation] : [body, ...eyes];
  }

  const selector = effect === "wave" ? "[data-motion-wave]" : "[data-motion-message]";
  return Array.from(root.querySelectorAll<HTMLElement>(selector)).flatMap((target, index) => {
    const animation = playItem(target, effect, index);
    return animation ? [animation] : [];
  });
}

function visibleEnough(target: HTMLElement) {
  const rect = target.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return false;
  const viewportBottom = Math.max(0, window.innerHeight - 50);
  const width = Math.max(0, Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0));
  const height = Math.max(0, Math.min(rect.bottom, viewportBottom) - Math.max(rect.top, 0));
  return (width * height) / (rect.width * rect.height) >= .2;
}

function attachItemMotion(
  root: HTMLDivElement,
  effect: "sequence" | "hero",
  playedRef: { current: boolean },
  playedItemsRef: { current: Set<HTMLElement> },
) {
  const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-motion-item]"));
  const played = playedItemsRef.current;
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)");
  const active = new Map<HTMLElement, Animation>();
  let disposed = false;
  let observer: IntersectionObserver | undefined;

  const updateState = () => {
    if (targets.every((target) => played.has(target)) && active.size === 0) {
      playedRef.current = true;
      observer?.disconnect();
      root.dataset.motionState = "complete";
    } else {
      root.dataset.motionState = reduced?.matches ? "reduced" : active.size > 0 ? "playing" : "pending";
    }
  };

  const finishItem = (target: HTMLElement) => {
    const animation = active.get(target);
    if (!animation) return;
    active.delete(target);
    animation.cancel();
    observer?.unobserve(target);
    target.dataset.motionState = "complete";
    updateState();
  };

  const tryStart = (target: HTMLElement, index: number) => {
    if (disposed || played.has(target) || document.visibilityState !== "visible" || reduced?.matches) return;
    if (observer && !visibleEnough(target)) return;
    played.add(target);
    const animation = playItem(target, effect, index);
    if (!animation) {
      target.dataset.motionState = "complete";
      observer?.unobserve(target);
      updateState();
      return;
    }
    active.set(target, animation);
    target.dataset.motionState = "playing";
    updateState();
    void animation.finished.then(
      () => { if (!disposed) finishItem(target); },
      () => { if (!disposed) finishItem(target); },
    );
  };

  const tryStartVisible = () => targets.forEach((target, index) => tryStart(target, index));
  const onPreferenceChange = () => {
    if (reduced?.matches) {
      Array.from(active.keys()).forEach(finishItem);
      updateState();
    } else {
      tryStartVisible();
      updateState();
    }
  };
  const onVisibilityChange = () => {
    if (document.visibilityState === "hidden") Array.from(active.keys()).forEach(finishItem);
    else tryStartVisible();
  };

  updateState();
  if (!playedRef.current) {
    reduced?.addEventListener?.("change", onPreferenceChange);
    document.addEventListener("visibilitychange", onVisibilityChange);
    if (typeof IntersectionObserver === "undefined") {
      tryStartVisible();
    } else {
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          const target = entry.target as HTMLElement;
          if (active.has(target) && !entry.isIntersecting) finishItem(target);
          else if (entry.intersectionRatio >= .2) tryStart(target, targets.indexOf(target));
        }
      }, { rootMargin: "0px 0px -50px 0px", threshold: [0, .2] });
      targets.filter((target) => !played.has(target)).forEach((target) => observer?.observe(target));
    }
  }

  return () => {
    disposed = true;
    observer?.disconnect();
    Array.from(active.keys()).forEach(finishItem);
    reduced?.removeEventListener?.("change", onPreferenceChange);
    document.removeEventListener("visibilitychange", onVisibilityChange);
  };
}

// Kept separate from React so viewport and preference lifecycle can be tested without a DOM renderer.
export function attachMotionScene(
  root: HTMLDivElement,
  effect: MotionEffect,
  playedRef: { current: boolean },
  playedItemsRef?: { current: Set<HTMLElement> },
) {
  if (effect === "sequence" || effect === "hero") {
    return attachItemMotion(root, effect, playedRef, playedItemsRef ?? { current: new Set() });
  }
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)");
  let disposed = false;
  let active = false;
  let animations: Animation[] = [];
  let observer: IntersectionObserver | undefined;

  const setState = (state: "pending" | "playing" | "complete" | "reduced") => {
    root.dataset.motionState = state;
  };

  const finish = (state: "complete" | "reduced") => {
    if (!active) return;
    active = false;
    observer?.disconnect();
    animations.forEach((animation) => animation.cancel());
    animations = [];
    setState(state);
  };

  const tryStart = () => {
    if (disposed || playedRef.current || document.visibilityState !== "visible") return;
    if (reduced?.matches) {
      setState("reduced");
      return;
    }
    if (observer && !visibleEnough(root)) return;

    playedRef.current = true;
    animations = playEffect(root, effect);
    if (animations.length === 0) {
      observer?.disconnect();
      setState("complete");
      return;
    }

    active = true;
    setState("playing");
    void Promise.allSettled(animations.map((animation) => animation.finished)).then(() => {
      if (!disposed && active) finish("complete");
    });
  };

  const onPreferenceChange = () => {
    if (reduced?.matches) {
      if (active) finish("reduced");
      else if (!playedRef.current) setState("reduced");
    } else if (playedRef.current) {
      setState("complete");
    } else {
      setState("pending");
      tryStart();
    }
  };

  const onVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      if (active) finish("complete");
    } else {
      tryStart();
    }
  };

  setState(reduced?.matches ? "reduced" : "pending");
  reduced?.addEventListener?.("change", onPreferenceChange);
  document.addEventListener("visibilitychange", onVisibilityChange);

  if (typeof IntersectionObserver === "undefined") {
    tryStart();
  } else {
    observer = new IntersectionObserver(([entry]) => {
      if (active && !entry.isIntersecting) finish("complete");
      else if (entry.intersectionRatio >= .2) tryStart();
    }, { rootMargin: "0px 0px -50px 0px", threshold: [0, .2] });
    observer.observe(root);
  }

  return () => {
    disposed = true;
    observer?.disconnect();
    animations.forEach((animation) => animation.cancel());
    animations = [];
    reduced?.removeEventListener?.("change", onPreferenceChange);
    document.removeEventListener("visibilitychange", onVisibilityChange);
    if (playedRef.current) setState("complete");
  };
}

export function MotionScene({ effect, children, ...props }: MotionSceneProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const playedRef = useRef(false);
  const playedItemsRef = useRef(new Set<HTMLElement>());

  useEffect(() => {
    const root = rootRef.current;
    if (!root || playedRef.current || typeof root.animate !== "function") return;
    return attachMotionScene(root, effect, playedRef, playedItemsRef);
  }, [effect]);

  return <div {...props} data-motion-state="pending" ref={rootRef}>{children}</div>;
}
