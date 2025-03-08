
import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import AuthForm from '@/components/AuthForm';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Add subtle background animation
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== 'undefined') {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.documentElement.style.setProperty('--mouse-x', x.toString());
        document.documentElement.style.setProperty('--mouse-y', y.toString());
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full overflow-hidden bg-auth-gradient">
      {/* Background gradient elements */}
      <div className="fixed inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70 pointer-events-none"></div>
      <div className="fixed -top-[40%] -left-[10%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="fixed -bottom-[30%] -right-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
      
      <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-12 sm:px-10">
        {/* Header */}
        <div className="w-full max-w-md animate-fade-in">
          <Logo className="mx-auto mb-2" />
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold mb-2 text-foreground">
              Welcome to PickCreator
            </h1>
            <p className="text-muted-foreground max-w-sm mx-auto">
              Connect brands with perfect influencers for authentic partnerships
            </p>
          </div>
        </div>
        
        {/* Auth Form Card */}
        <div className="w-full max-w-md glass rounded-3xl p-6 sm:p-8 animate-scale-in shadow-card">
          <AuthForm />
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-sm text-muted-foreground text-center animate-fade-in">
          <p>© {new Date().getFullYear()} PickCreator. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
