
import React from 'react';
import { FormType, useFormAnimation } from '../hooks/useFormAnimation';

interface FormTransitionProps {
  initialForm?: FormType;
  loginForm: React.ReactNode;
  signupForm: React.ReactNode;
}

const FormTransition: React.FC<FormTransitionProps> = ({
  initialForm = 'login',
  loginForm,
  signupForm,
}) => {
  const {
    currentForm,
    shouldRenderLogin,
    shouldRenderSignup,
    loginClassName,
    signupClassName,
    switchForm,
  } = useFormAnimation(initialForm);

  return (
    <div className="w-full">
      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-secondary rounded-lg p-1">
          <button
            type="button"
            onClick={() => switchForm('login')}
            className={`px-6 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
              currentForm === 'login'
                ? 'bg-white shadow-sm text-foreground'
                : 'text-muted-foreground'
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => switchForm('signup')}
            className={`px-6 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
              currentForm === 'signup'
                ? 'bg-white shadow-sm text-foreground'
                : 'text-muted-foreground'
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="relative">
        {shouldRenderLogin && (
          <div className={`form-container absolute inset-0 ${loginClassName}`}>
            {loginForm}
          </div>
        )}
        
        {shouldRenderSignup && (
          <div className={`form-container absolute inset-0 ${signupClassName}`}>
            {signupForm}
          </div>
        )}
      </div>
      
      <div className="h-[340px] md:h-[380px]">
        {/* This is just to create space for the absolute positioned forms */}
      </div>
    </div>
  );
};

export default FormTransition;
