import React from 'react'
import './Button.module.css'

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
  className = '', 
  ...props 
}) => {
  const buttonClasses = [
    'button',
    `button-${variant}`,
    `button-${size}`,
    fullWidth ? 'button-full-width' : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <button 
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;