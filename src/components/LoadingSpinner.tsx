
import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'gold' | 'white';
}

const LoadingSpinner = ({ 
  className,
  size = 'md',
  variant = 'gold'
}: LoadingSpinnerProps) => {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  const variantMap = {
    gold: 'border-salon-gold/20 border-t-salon-gold',
    white: 'border-white/20 border-t-white'
  };

  return (
    <div className="flex items-center justify-center">
      <div 
        className={cn(
          "border-4 rounded-full animate-spin",
          sizeMap[size],
          variantMap[variant],
          className
        )}
      >
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-1/2 w-0.5 h-1/4 bg-salon-gold/50 origin-bottom transform -translate-x-1/2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
