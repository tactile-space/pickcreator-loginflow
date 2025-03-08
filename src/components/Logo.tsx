
import React from 'react';
import { Sparkles } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/20 rounded-lg animate-pulse-slow"></div>
        <Sparkles className="w-5 h-5 text-primary z-10 animate-float" />
      </div>
      <div className="font-semibold text-xl tracking-tight">
        <span className="text-foreground">Pick</span>
        <span className="text-primary">Creator</span>
      </div>
    </div>
  );
};

export default Logo;
