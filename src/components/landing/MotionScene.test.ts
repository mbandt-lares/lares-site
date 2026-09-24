import assert from "node:assert/strict";
import test from "node:test";
import { attachMotionScene } from "./MotionScene";

function harness() {
  const originals = ["window", "document", "IntersectionObserver"].map((name) =>
    [name, Object.getOwnPropertyDescriptor(globalThis, name)] as const,
  );
  const mediaListeners = new Set<() => void>();
  const visibilityListeners = new Set<() => void>();
  const media = {
    matches: false,
    addEventListener: (_name: string, listener: () => void) => mediaListeners.add(listener),
    removeEventListener: (_name: string, listener: () => void) => mediaListeners.delete(listener),
    change(matches: boolean) {
      this.matches = matches;
      mediaListeners.forEach((listener) => listener());
    },
  };
  const doc = {
    visibilityState: "visible",
    addEventListener: (_name: string, listener: () => void) => visibilityListeners.add(listener),
    removeEventListener: (_name: string, listener: () => void) => visibilityListeners.delete(listener),
    change(visibilityState: string) {
      this.visibilityState = visibilityState;
      visibilityListeners.forEach((listener) => listener());
    },
  };
  const win = { innerWidth: 600, innerHeight: 895, matchMedia: () => media };

  class Observer {
    static instances: Observer[] = [];
    observed = new Set<Element>();
    disconnected = false;
    constructor(private callback: IntersectionObserverCallback, readonly options: IntersectionObserverInit) {
      Observer.instances.push(this);
    }
    observe(target: Element) { this.observed.add(target); }
    unobserve(target: Element) { this.observed.delete(target); }
    disconnect() { this.disconnected = true; this.observed.clear(); }
    emit(target: Element, intersectionRatio: number) {
      this.callback([{ target, intersectionRatio, isIntersecting: intersectionRatio > 0 } as IntersectionObserverEntry], this as unknown as IntersectionObserver);
    }
  }

  Object.defineProperty(globalThis, "window", { configurable: true, value: win });
  Object.defineProperty(globalThis, "document", { configurable: true, value: doc });
  Object.defineProperty(globalThis, "IntersectionObserver", { configurable: true, value: Observer });

  function element(top = 100, children: HTMLElement[] = []) {
    const animations: { cancelled: number; frames: Keyframe[]; options: KeyframeAnimationOptions }[] = [];
    const target = {
      dataset: {} as Record<string, string>,
      top,
      getBoundingClientRect() {
        return { left: 0, right: 200, top: this.top, bottom: this.top + 100, width: 200, height: 100 } as DOMRect;
      },
      querySelectorAll: () => children,
      animate(frames: Keyframe[], options: KeyframeAnimationOptions) {
        const record = { cancelled: 0, frames, options };
        animations.push(record);
        return { finished: new Promise<void>(() => {}), cancel: () => { record.cancelled++; } } as unknown as Animation;
      },
    };
    return { target: target as unknown as HTMLDivElement, animations, moveTo: (position: number) => { target.top = position; } };
  }

  return {
    media, doc, Observer, element,
    listenerCounts: () => [mediaListeners.size, visibilityListeners.size],
    restore() {
      for (const [name, descriptor] of originals) {
        if (descriptor) Object.defineProperty(globalThis, name, descriptor);
        else Reflect.deleteProperty(globalThis, name);
      }
    },
  };
}

test("an initially hidden scene waits until visible and in the viewport", () => {
  const h = harness();
  try {
    h.doc.visibilityState = "hidden";
    const { target, animations } = h.element();
    const played = { current: false };
    const cleanup = attachMotionScene(target, "settle", played);
    const observer = h.Observer.instances[0];
    assert.equal(observer.options.rootMargin, "0px 0px -50px 0px");
    observer.emit(target, 1);
    assert.equal(animations.length, 0);
    assert.equal(target.dataset.motionState, "pending");
    h.doc.change("visible");
    assert.equal(animations.length, 1);
    assert.equal(target.dataset.motionState, "playing");
    cleanup();
    assert.deepEqual(h.listenerCounts(), [0, 0]);
  } finally { h.restore(); }
});

test("hiding before intersection keeps the pending observer and later starts once", () => {
  const h = harness();
  try {
    const scene = h.element(1100);
    const cleanup = attachMotionScene(scene.target, "greet", { current: false });
    const observer = h.Observer.instances[0];
    h.doc.change("hidden");
    assert.equal(observer.disconnected, false);
    scene.moveTo(100);
    h.doc.change("visible");
    assert.equal(scene.animations.length, 1);
    observer.emit(scene.target, 0);
    assert.equal(scene.animations[0].cancelled, 1);
    assert.equal(scene.target.dataset.motionState, "complete");
    observer.emit(scene.target, 1);
    assert.equal(scene.animations.length, 1);
    cleanup();
  } finally { h.restore(); }
});

test("reduced motion keeps unplayed scenes eligible and cancels active motion", () => {
  const h = harness();
  try {
    h.media.matches = true;
    const { target, animations } = h.element();
    const cleanup = attachMotionScene(target, "settle", { current: false });
    const observer = h.Observer.instances[0];
    observer.emit(target, 1);
    assert.equal(target.dataset.motionState, "reduced");
    assert.equal(animations.length, 0);
    h.media.change(false);
    assert.equal(animations.length, 1);
    h.media.change(true);
    assert.equal(animations[0].cancelled, 1);
    assert.equal(target.dataset.motionState, "reduced");
    h.media.change(false);
    assert.equal(animations.length, 1);
    cleanup();
    assert.deepEqual(h.listenerCounts(), [0, 0]);
  } finally { h.restore(); }
});

test("sequence observes each item so lower mobile cards animate when reached", () => {
  const h = harness();
  try {
    const first = h.element(100);
    const second = h.element(1100);
    const root = h.element(100, [first.target, second.target]);
    const cleanup = attachMotionScene(root.target, "sequence", { current: false }, { current: new Set() });
    const observer = h.Observer.instances[0];
    observer.emit(first.target, 1);
    assert.equal(first.animations.length, 1);
    assert.equal(second.animations.length, 0);
    second.moveTo(300);
    observer.emit(second.target, 1);
    assert.equal(second.animations.length, 1);
    assert.equal(second.animations[0].options.fill, "backwards");
    cleanup();
    assert.deepEqual(h.listenerCounts(), [0, 0]);
  } finally { h.restore(); }
});

test("Lar's eyes and shadow share the greeting timeline and stop with the body", () => {
  for (const reason of ["hidden", "reduced"] as const) {
    const h = harness();
    try {
      const leftEye = h.element();
      const rightEye = h.element();
      const shadow = h.element();
      const root = h.element(100, [leftEye.target, rightEye.target]);
      Object.defineProperty(root.target, "parentElement", { value: { querySelector: () => shadow.target } });
      const cleanup = attachMotionScene(root.target, "greet", { current: false });
      h.Observer.instances[0].emit(root.target, 1);
      assert.equal(root.animations.length, 1);
      assert.equal(leftEye.animations.length, 1);
      assert.equal(rightEye.animations.length, 1);
      assert.equal(shadow.animations.length, 1);
      assert.equal(leftEye.animations[0].frames[1].transform, "translate(.6%, -.2%)");
      assert.equal(rightEye.animations[0].options.duration, 1400);
      assert.equal(shadow.animations[0].frames[1].transform, "scaleX(.94)");
      assert.equal(shadow.animations[0].frames[1].opacity, .82);

      if (reason === "hidden") h.doc.change("hidden");
      else h.media.change(true);
      assert.equal(root.animations[0].cancelled, 1);
      assert.equal(leftEye.animations[0].cancelled, 1);
      assert.equal(rightEye.animations[0].cancelled, 1);
      assert.equal(shadow.animations[0].cancelled, 1);
      cleanup();
    } finally { h.restore(); }
  }
});
