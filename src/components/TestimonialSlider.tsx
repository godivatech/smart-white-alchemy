
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const TestimonialSlider = ({ 
  testimonials, 
  autoPlay = true, 
  interval = 5000,
  className 
}: TestimonialSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    // Animation for slide transitions
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
    
    // Auto play functionality
    if (autoPlay && !isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, interval);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex, autoPlay, interval, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={slideRef}
        key={currentTestimonial.id}
        className="bg-salon-darkgray border border-salon-gold/30 rounded-lg p-6 md:p-8"
      >
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-salon-gold">
              <img 
                src={currentTestimonial.avatar} 
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`w-4 h-4 ${i < currentTestimonial.rating ? 'text-salon-gold fill-salon-gold' : 'text-gray-400'}`}
                />
              ))}
            </div>
            
            <blockquote className="text-gray-200 italic mb-4">
              "{currentTestimonial.content}"
            </blockquote>
            
            <div>
              <p className="font-semibold text-salon-gold">{currentTestimonial.name}</p>
              <p className="text-sm text-gray-400">{currentTestimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-salon-gold' : 'bg-gray-600'
            } transition-all duration-300`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-salon-gold/50 bg-salon-black/80 text-salon-gold hover:bg-salon-gold hover:text-salon-black pointer-events-auto"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-salon-gold/50 bg-salon-black/80 text-salon-gold hover:bg-salon-gold hover:text-salon-black pointer-events-auto"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
