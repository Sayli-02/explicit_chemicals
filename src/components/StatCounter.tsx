import React, { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

interface Props {
  end: number;
  suffix?: string;
  label: string;
}

export const StatCounter: React.FC<Props> = ({ end, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const incrementTime = 30;
          const steps = duration / incrementTime;
          const stepValue = end / steps;

          const timer = setInterval(() => {
            start += stepValue;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, incrementTime);
        }
      },
      { threshold: 0.5 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [end, hasAnimated]);

  return (
    <Reveal>
      <div ref={ref} className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-black/5 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-shadow">
        <span className="text-5xl lg:text-7xl font-bold text-teal-heading mb-4 font-display tracking-tight">
          {count}{suffix}
        </span>
        <span className="text-lg lg:text-xl font-medium text-navy leading-tight">
          {label}
        </span>
      </div>
    </Reveal>
  );
};
