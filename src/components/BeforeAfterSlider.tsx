
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, className }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovering, setIsHovering] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Subtle automatic animation when not interacting
  useEffect(() => {
    let animationInterval: ReturnType<typeof setInterval>;
    
    // Only animate when not being interacted with
    if (!isDragging.current && !isHovering) {
      animationInterval = setInterval(() => {
        setSliderPosition(prev => {
          // Create gentle bobbing effect between 45% and 55%
          const newPos = prev + (Math.random() > 0.5 ? 0.5 : -0.5);
          if (newPos > 55) return 54.5;
          if (newPos < 45) return 45.5;
          return newPos;
        });
      }, 150);
    }

    return () => clearInterval(animationInterval);
  }, [isHovering]);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    let position = ((e.clientX - rect.left) / rect.width) * 100;
    
    // Clamp value between 0 and 100
    position = Math.min(Math.max(position, 0), 100);
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    let position = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    
    // Clamp value between 0 and 100
    position = Math.min(Math.max(position, 0), 100);
    setSliderPosition(position);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={sliderRef}
      className={cn("relative w-full h-64 md:h-80 overflow-hidden rounded-lg cursor-ew-resize", className)}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* After Image (Full width) */}
      <div className="absolute inset-0 w-full h-full">
        <img src={afterImage} alt="After" className="w-full h-full object-cover" />
      </div>
      
      {/* Before Image (Partial width based on slider) */}
      <div 
        className="absolute inset-0 h-full overflow-hidden transition-all duration-100"
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={beforeImage} alt="Before" className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>
      
      {/* Slider Control */}
      <div 
        className="absolute inset-y-0 top-0 bottom-0 w-1 bg-white"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-salon-gold rounded-full border-2 border-white flex items-center justify-center shadow-lg shadow-salon-gold/50 hover:scale-110 transition-transform duration-200">
          <div className="flex items-center justify-center">
            <div className="w-4 h-4 flex items-center justify-center">
              <span className="block w-0.5 h-4 bg-white"></span>
              <span className="block w-0.5 h-4 bg-white ml-1"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Labels with animation */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1.5 text-sm rounded-full font-semibold backdrop-blur-sm border border-white/10 hover:bg-black/90 transition-colors duration-300">Before</div>
      <div className="absolute bottom-4 right-4 bg-salon-gold/90 text-salon-black px-3 py-1.5 text-sm rounded-full font-semibold backdrop-blur-sm border border-white/10 hover:bg-salon-gold transition-colors duration-300">After</div>
      
      {/* Instruction overlay that fades out on interaction */}
      <div 
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${isDragging.current || isHovering ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm text-white text-sm flex items-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
          </svg>
          <span>Drag to compare</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
