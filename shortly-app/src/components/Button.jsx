import React from 'react';

const Button = ({ label, rounded, classes }) => {
  return <button className={`w-full px-5 py-3 text-white bg-cyan hover:bg-cyan/70 ${rounded ? 'rounded-full' : 'rounded-md'} ${classes}`}>{label}</button>;
};

export default Button;
