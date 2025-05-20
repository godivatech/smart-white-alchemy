
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface ServiceFeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
  className?: string;
  index?: number;
}

const ServiceFeatureCard = ({ 
  title, 
  description, 
  icon, 
  price, 
  className,
  index = 0 
}: ServiceFeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Create hover animation for the card
    const card = cardRef.current;
    const iconWrapper = iconWrapperRef.current;
    
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        duration: 0.3,
        ease: 'power2.out',
      });
      
      if (iconWrapper) {
        gsap.to(iconWrapper, {
          rotateY: 180,
          duration: 0.5,
          ease: 'power1.inOut',
        });
      }
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
      
      if (iconWrapper) {
        gsap.to(iconWrapper, {
          rotateY: 0,
          duration: 0.5,
          ease: 'power1.inOut',
        });
      }
    });
    
    // Initial appearance animation with staggered delay
    gsap.fromTo(
      card,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        delay: 0.1 * index,
        ease: 'power3.out' 
      }
    );
    
    return () => {
      card.removeEventListener('mouseenter', () => {});
      card.removeEventListener('mouseleave', () => {});
    };
  }, [index]);

  return (
    <Card 
      ref={cardRef}
      className={cn(
        "bg-gradient-to-b from-salon-black to-salon-darkgray border-salon-gold/30 hover:border-salon-gold transition-all duration-300",
        className
      )}
    >
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div 
          ref={iconWrapperRef}
          className="w-16 h-16 flex items-center justify-center rounded-full bg-salon-gold/10 mb-4 perspective-3d"
        >
          <div className="text-salon-gold">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-playfair font-bold text-salon-gold mb-2">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-4">
          {description}
        </p>
        
        <div className="mt-auto pt-2">
          <span className="block text-xl text-salon-gold font-semibold mb-2">
            {price}
          </span>
          <Button 
            variant="outline" 
            className="border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-salon-black transition-colors duration-300 w-full"
          >
            Book Service
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceFeatureCard;
