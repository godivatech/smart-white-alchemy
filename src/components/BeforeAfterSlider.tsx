
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, className }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

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
    >
      {/* After Image (Full width) */}
      <div className="absolute inset-0 w-full h-full">
        <img src={afterImage} alt="After" className="w-full h-full object-cover" />
      </div>
      
      {/* Before Image (Partial width based on slider) */}
      <div 
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={beforeImage} alt="Before" className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>
      
      {/* Slider Control */}
      <div 
        className="absolute inset-y-0 top-0 bottom-0 w-1 bg-white"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-salon-gold rounded-full border-2 border-white flex items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="w-4 h-4 flex items-center justify-center">
              <span className="block w-0.5 h-3 bg-white"></span>
              <span className="block w-0.5 h-3 bg-white ml-1"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">Before</div>
      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-sm rounded">After</div>
    </div>
  );
};

export default BeforeAfterSlider;
