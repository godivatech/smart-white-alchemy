
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
  index: number;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  price, 
  index 
}: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.set(cardRef.current, { 
      y: 50, 
      opacity: 0 
    });

    ScrollTrigger.create({
      trigger: cardRef.current,
      start: "top 85%",
      onEnter: () => {
        gsap.to(cardRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
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
      ref={cardRef}
      className="service-pattern bg-salon-darkgray border border-salon-gold/20 p-6 rounded-md transform transition-transform hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(212,175,55,0.3)] duration-300"
    >
      <div className="mb-4 flex justify-between items-center">
        <div className="bg-salon-gold/10 p-3 rounded-full w-16 h-16 flex items-center justify-center text-salon-gold">
          {icon}
        </div>
        {price && (
          <div className="text-salon-gold font-playfair font-bold text-xl">
            {price}
          </div>
        )}
      </div>
      <h3 className="text-xl md:text-2xl font-playfair font-bold mb-2 text-white">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;
