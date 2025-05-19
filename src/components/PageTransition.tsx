
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    
    // Timeline for page transitions
    const tl = gsap.timeline();
    
    // Initial page load
    tl.fromTo(
      overlay,
      { scaleY: 1 },
      { 
        scaleY: 0, 
        duration: 1,
        ease: "power3.inOut",
        transformOrigin: "top"
      }
    );
    
    // Handle route changes
    return () => {
      gsap.fromTo(
        overlay,
        { scaleY: 0 },
        { 
          scaleY: 1, 
          duration: 0.5, 
          ease: "power3.inOut",
          transformOrigin: "bottom"
        }
      );
    };
  }, [location]);

  return (
    <div className="relative">
      {children}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-salon-black z-[9999]"
        style={{ transformOrigin: 'top' }}
      />
    </div>
  );
};

export default PageTransition;
