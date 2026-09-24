"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef, type ReactNode } from "react";

type MotionEffect = "settle" | "greet" | "wave" | "messages";

type MotionSceneProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
  effect: MotionEffect;
  children: ReactNode;
};

const easeOut = "cubic-bezier(.22,1,.36,1)";

function playEffect(root: HTMLDivElement, effect: MotionEffect): Animation[] {
  if (effect === "settle") {
    return [root.animate(
      [{ transform: "translateY(6px)" }, { transform: "translateY(0)" }],
      { duration: 420, easing: easeOut },
    )];
  }

  if (effect === "greet") {
    return [root.animate(
      [{ transform: "translateY(3px) rotate(-2deg)" }, { transform: "translateY(0) rotate(0deg)" }],
      { duration: 600, easing: easeOut },
    )];
  }

  const selector = effect === "wave" ? "[data-motion-wave]" : "[data-motion-message]";
  return Array.from(root.querySelectorAll<HTMLElement>(selector)).flatMap((target, index) => {
    if (typeof target.animate !== "function") return [];
    if (effect === "wave") {
      return [target.animate(
        [
          { offset: 0, transform: "scaleY(.8)", transformOrigin: "center bottom" },
          { offset: .35, transform: "scaleY(1)", transformOrigin: "center bottom" },
          { offset: .65, transform: "scaleY(.68)", transformOrigin: "center bottom" },
          { offset: 1, transform: "scaleY(1)", transformOrigin: "center bottom" },
        ],
        { duration: 700, delay: Math.min(index * 45, 180), easing: easeOut },
      )];
    }
    return [target.animate(
      [{ opacity: .85 }, { opacity: 1 }],
      { duration: 240, delay: Math.min(index * 100, 260), easing: easeOut },
    )];
  });
}

export function MotionScene({ effect, children, ...props }: MotionSceneProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const playedRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || playedRef.current || typeof root.animate !== "function") return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (reduced?.matches || document.visibilityState === "hidden") return;

    let played = false;
    let stopped = false;
    let animations: Animation[] = [];
    let observer: IntersectionObserver | undefined;

    const stop = () => {
      if (stopped) return;
      stopped = true;
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations = [];
    };

    const start = () => {
      if (played || stopped) return;
      played = true;
      playedRef.current = true;
      animations = playEffect(root, effect);
      if (animations.length === 0) {
        stop();
        return;
      }
      void Promise.allSettled(animations.map((animation) => animation.finished)).then(stop);
    };

    const onReducedChange = (event: MediaQueryListEvent) => {
      if (event.matches) stop();
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") stop();
    };

    reduced?.addEventListener?.("change", onReducedChange);
    document.addEventListener("visibilitychange", onVisibilityChange);

    if (typeof IntersectionObserver === "undefined") {
      start();
    } else {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.intersectionRatio >= .15) start();
        else if (played && !entry.isIntersecting) stop();
      }, { threshold: [0, .15] });
      observer.observe(root);
    }

    return () => {
      stop();
      reduced?.removeEventListener?.("change", onReducedChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [effect]);

  return <div {...props} ref={rootRef}>{children}</div>;
}
