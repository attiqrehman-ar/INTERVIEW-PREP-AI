'use client';

import React, { useState } from 'react';

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const isPasswordType = type === 'password';
  const inputType = isPasswordType && showPassword ? 'text' : type;

  return (
    <div className='mb-5'>
      <label htmlFor={name} className='block mb-2 text-sm font-medium text-gray-900'>
        {label}
      </label>

      <div className='relative'>
        <input
          type={inputType}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full px-4 py-3 text-sm text-gray-900 bg-gray-100 border ${
            error && touched ? 'border-red-500' : 'border-orange-400'
          } rounded-md focus:outline-none focus:ring-2 ${
            error && touched ? 'focus:ring-red-400' : 'focus:ring-orange-300'
          } ${isPasswordType ? 'pr-12' : ''}`} // extra padding for eye icon
        />

        {isPasswordType && (
          <span
            className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 cursor-pointer'
            onClick={toggleShowPassword}
          >
            {showPassword ? '🙈' : '👁️'} {/* Replace with real icons if needed */}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
