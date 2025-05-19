
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GalleryImageProps {
  src: string;
  alt: string;
  index: number;
}

const GalleryImage = ({ src, alt, index }: GalleryImageProps) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.set(imageRef.current, { 
      opacity: 0, 
      scale: 0.8 
    });

    ScrollTrigger.create({
      trigger: imageRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.to(imageRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: (index % 4) * 0.1,
          ease: "power3.out"
        });
      },
      once: true
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index]);

  return (
    <div 
      ref={imageRef}
      className="overflow-hidden rounded-lg cursor-pointer group relative"
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-salon-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
        <h3 className="text-white text-lg font-playfair">{alt}</h3>
      </div>
    </div>
  );
};

export default GalleryImage;
