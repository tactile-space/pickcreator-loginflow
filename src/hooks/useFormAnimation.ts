
import { useState, useEffect } from 'react';

export type FormType = 'login' | 'signup';

interface FormAnimationState {
  current: FormType;
  animatingTo: FormType | null;
  shouldRenderLogin: boolean;
  shouldRenderSignup: boolean;
  loginClassName: string;
  signupClassName: string;
}

export const useFormAnimation = (initialForm: FormType = 'login') => {
  const [state, setState] = useState<FormAnimationState>({
    current: initialForm,
    animatingTo: null,
    shouldRenderLogin: initialForm === 'login',
    shouldRenderSignup: initialForm === 'signup',
    loginClassName: initialForm === 'login' ? 'animate-fade-in' : 'hidden',
    signupClassName: initialForm === 'signup' ? 'animate-fade-in' : 'hidden',
  });

  const switchForm = (formType: FormType) => {
    if (state.current === formType || state.animatingTo) return;

    setState((prev) => ({
      ...prev,
      animatingTo: formType,
      shouldRenderLogin: prev.current === 'login' || formType === 'login',
      shouldRenderSignup: prev.current === 'signup' || formType === 'signup',
      loginClassName:
        prev.current === 'login' ? 'animate-fade-out' : 'animate-fade-in hidden',
      signupClassName:
        prev.current === 'signup' ? 'animate-fade-out' : 'animate-fade-in hidden',
    }));

    // Stage 1: Start exit animation for current form
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        loginClassName:
          prev.current === 'login' ? 'animate-fade-out' : 'animate-fade-in hidden',
        signupClassName:
          prev.current === 'signup' ? 'animate-fade-out' : 'animate-fade-in hidden',
      }));
    }, 0);

    // Stage 2: After exit animation, switch visibility
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        loginClassName:
          formType === 'login' ? 'animate-fade-in' : 'hidden',
        signupClassName:
          formType === 'signup' ? 'animate-fade-in' : 'hidden',
      }));
    }, 300);

    // Stage 3: Complete transition
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        current: formType,
        animatingTo: null,
        shouldRenderLogin: formType === 'login',
        shouldRenderSignup: formType === 'signup',
      }));
    }, 600);
  };

  return {
    currentForm: state.current,
    isAnimating: !!state.animatingTo,
    shouldRenderLogin: state.shouldRenderLogin,
    shouldRenderSignup: state.shouldRenderSignup,
    loginClassName: state.loginClassName,
    signupClassName: state.signupClassName,
    switchForm,
  };
};
