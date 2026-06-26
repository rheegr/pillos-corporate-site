"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as React.ElementType;

  // Pre-hydration / pre-mount: render statically visible.
  // This guarantees SSR HTML is fully visible - no blank first viewport
  // waiting for IntersectionObserver to fire.
  if (!mounted) {
    return (
      <Component ref={ref as React.Ref<HTMLElement>} className={className}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
