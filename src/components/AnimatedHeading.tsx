
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  split?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
}

const AnimatedHeading = ({ 
  text, 
  className, 
  split = true,
  tag: Tag = 'h2'
}: AnimatedHeadingProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const words = split ? text.split(' ') : [text];

  useEffect(() => {
    if (!headingRef.current) return;

    const spans = headingRef.current.querySelectorAll('span');
    
    gsap.set(spans, { 
      y: 50, 
      opacity: 0 
    });

    ScrollTrigger.batch(spans, {
      onEnter: (batch) => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
        });
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [text]);

  return (
    <Tag 
      ref={headingRef} 
      className={cn(
        "overflow-hidden",
        className
      )}
    >
      {words.map((word, i) => (
        <span 
          key={i}
          className="inline-block mr-2 last:mr-0"
          style={{ opacity: 0 }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedHeading;
