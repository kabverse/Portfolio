
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GlowingButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
}

const GlowingButton = ({ 
  children, 
  className, 
  onClick, 
  variant = 'default',
  size = 'default'
}: GlowingButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      size={size}
      className={cn(
        "relative overflow-hidden group transition-all duration-300",
        "bg-primary hover:bg-primary/90 text-primary-foreground",
        "shadow-lg hover:shadow-primary/25 hover:shadow-2xl",
        "border border-primary/20 hover:border-primary/40",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        "animate-glow",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Button>
  );
};

export default GlowingButton;
