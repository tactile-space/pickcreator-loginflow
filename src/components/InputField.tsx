
import React, { useState, useEffect } from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  autoComplete,
  className = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    setHasValue(value.length > 0);
  }, [value]);

  return (
    <div 
      className={`relative mb-6 input-focus-ring rounded-xl ${hasValue ? 'input-has-value' : ''} ${className}`}
    >
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className="input-field w-full h-14 px-4 pt-4 pb-2 bg-white/50 backdrop-blur-sm rounded-xl border border-border/50 focus:outline-none transition-colors duration-300 shadow-input"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        htmlFor={id}
        className={`input-label left-4 ${
          hasValue || isFocused ? 'top-2 text-xs' : 'top-1/2 -translate-y-1/2'
        } text-muted-foreground`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
