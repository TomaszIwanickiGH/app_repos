import React from 'react';

const Button = ({ label, rounded, classes, small, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full ${small ? 'px-5 py-1.5' : 'px-5 py-3'} text-white bg-cyan hover:bg-cyan/70 ${rounded ? 'rounded-full' : 'rounded-md'} ${classes} focus:outline-gray focus:outline-1 focus:border-none`}
    >
      {label}
    </button>
  );
};

export default Button;
