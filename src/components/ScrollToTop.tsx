"use client";

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center z-50 transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #fbbf24 100%)',
            boxShadow: '0 4px 20px rgba(139, 92, 246, 0.5)'
          }}
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      )}
    </>
  );
}
