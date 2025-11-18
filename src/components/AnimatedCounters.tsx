"use client";

import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  gradientClass: string;
  label: string;
}

function Counter({ end, suffix = '', gradientClass, label }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <div className={`text-5xl font-bold mb-2 ${gradientClass}`}>
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
}

export default function AnimatedCounters() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto my-12">
      <Counter
        end={750}
        suffix="+"
        gradientClass="gradient-purple-gold"
        label="Human Systems Optimized"
      />
      <Counter
        end={28}
        suffix="+"
        gradientClass="gradient-blue-gold"
        label="Businesses Launched"
      />
      <Counter
        end={15}
        suffix="+"
        gradientClass="gradient-green-gold"
        label="Years Experience"
      />
      <Counter
        end={5}
        suffix=""
        gradientClass="gradient-orange-gold"
        label="Continents"
      />
    </div>
  );
}
