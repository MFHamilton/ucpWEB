import React from 'react'

const Input = ({ label, className = '',   ...props }) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input 
        className={'input ${className}'}
        {...props}
      />
    </div>
  );
};

export default Input;