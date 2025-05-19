
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface TestimonialCardProps {
  name: string;
  text: string;
  image?: string;
  videoSrc?: string;
  rating: number;
  index: number;
}

const TestimonialCard = ({ 
  name, 
  text, 
  image,
  videoSrc, 
  rating,
  index
}: TestimonialCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    
    gsap.fromTo(
      cardRef.current,
      { 
        opacity: 0,
        y: 50
      },
      { 
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out"
      }
    );
  }, [index]);

  // Generate rating stars
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i <= rating ? 'text-salon-gold' : 'text-gray-500'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div 
      ref={cardRef}
      className="bg-salon-darkgray border border-salon-gold/20 p-6 rounded-lg relative"
    >
      <div className="absolute -top-4 left-6 bg-salon-gold text-salon-black py-1 px-4 rounded-full text-sm font-medium">
        {name}
      </div>
      
      {videoSrc ? (
        <div className="mb-6 rounded-md overflow-hidden">
          <video 
            controls 
            className="w-full h-56 object-cover rounded-md"
            poster={image}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : image ? (
        <div className="mb-6 rounded-md overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-56 object-cover rounded-md"
          />
        </div>
      ) : null}
      
      <div className="flex mb-4 mt-4">
        {renderStars()}
      </div>
      
      <p className="text-gray-300 italic">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;
