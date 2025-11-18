"use client";

import { useEffect } from 'react';

export default function ColorTransition() {
  useEffect(() => {
    const sections = document.querySelectorAll('[data-bg-color]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const color = entry.target.getAttribute('data-bg-color');
            if (color) {
              document.body.style.transition = 'background-color 0.8s ease';
              document.body.style.backgroundColor = color;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return null;
}
