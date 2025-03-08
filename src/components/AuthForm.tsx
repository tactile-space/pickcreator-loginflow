import React, { useState } from 'react';
import { FormType } from '../hooks/useFormAnimation';
import FormTransition from './FormTransition';
import InputField from './InputField';
import AccountTypeToggle from './AccountTypeToggle';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

type AccountType = 'brand' | 'influencer' | null;

const AuthForm: React.FC = () => {
  const { toast } = useToast();
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Signup form state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [accountType, setAccountType] = useState<AccountType>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Attempted",
      description: "This is a demo. Login functionality is not implemented yet.",
    });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Signup Attempted",
      description: `This is a demo. Signup as ${accountType} is not implemented yet.`,
    });
  };

  const handleForgotPassword = () => {
    toast({
      title: "Forgot Password",
      description: "This is a demo. Password recovery is not implemented yet.",
    });
  };

  const LoginForm = (
    <form onSubmit={handleLogin}>
      <InputField
        id="login-email"
        label="Email"
        type="email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
        required
        autoComplete="email"
      />
      
      <InputField
        id="login-password"
        label="Password"
        type="password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
        required
        autoComplete="current-password"
      />
      
      <div className="text-right mb-6">
        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Forgot Password?
        </button>
      </div>
      
      <Button 
        type="submit" 
        className="w-full h-14 rounded-xl font-medium bg-primary hover:bg-primary/90 shadow-button transition-all duration-300 btn-hover flex items-center justify-center gap-2"
      >
        <span>Log In</span>
        <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  );

  const SignupForm = (
    <form onSubmit={handleSignup}>
      <AccountTypeToggle 
        selectedType={accountType} 
        onChange={setAccountType} 
      />
      
      <InputField
        id="signup-name"
        label="Name"
        type="text"
        value={signupName}
        onChange={(e) => setSignupName(e.target.value)}
        required
        autoComplete="name"
      />
      
      <InputField
        id="signup-email"
        label="Email"
        type="email"
        value={signupEmail}
        onChange={(e) => setSignupEmail(e.target.value)}
        required
        autoComplete="email"
      />
      
      <InputField
        id="signup-password"
        label="Password"
        type="password"
        value={signupPassword}
        onChange={(e) => setSignupPassword(e.target.value)}
        required
        autoComplete="new-password"
      />
      
      <Button 
        type="submit" 
        className="w-full h-14 rounded-xl font-medium bg-primary hover:bg-primary/90 shadow-button transition-all duration-300 btn-hover flex items-center justify-center gap-2"
      >
        <span>Create Account</span>
        <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  );

  return (
    <div className="w-full max-w-md">
      <FormTransition
        initialForm="login"
        loginForm={LoginForm}
        signupForm={SignupForm}
      />
    </div>
  );
};

export default AuthForm;
