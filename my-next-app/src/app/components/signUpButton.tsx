// src/app/components/signUpButton.js
import React from 'react';

interface SignUpButtonProps {
  onClick: () => void;
}

const SignUpButton: React.FC<SignUpButtonProps> = ({ onClick }) => {
  return (
    <div
      className="relative w-[60px] h-[26px] cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-teal-500 text-xs font-medium font-['Inter']">
          Sign up
        </span>
      </div>
      <div className="absolute inset-0 w-[60px] h-[26px] m-auto rounded-full border border-teal-500"></div>
    </div>
  );
};

export default SignUpButton;
