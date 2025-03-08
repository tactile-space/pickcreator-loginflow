
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="font-semibold text-xl tracking-tight">
        <span className="text-[#0EA5E9]">Pick</span>
        <span className="text-foreground">Creator</span>
      </div>
    </div>
  );
};

export default Logo;
