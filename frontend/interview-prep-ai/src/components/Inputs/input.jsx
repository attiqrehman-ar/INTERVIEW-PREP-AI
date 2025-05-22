import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Input = ({ type, value, onChange, label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className='text-[13px] text-slate-800'>{label}</label>
      <div className='input-box flex items-center border-b border-gray-300 py-2'>
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className='w-full bg-transparent outline-none text-sm px-2'
          value={value}
          onChange={onChange}
        />
        {type === 'password' && (
          <>
            {showPassword ? (
              <FaRegEye
                size={20}
                className='text-primary cursor-pointer'
                onClick={toggleShowPassword}
              />
            ) : (
              <FaRegEyeSlash
                size={20}
                className='text-slate-400 cursor-pointer'
                onClick={toggleShowPassword}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
