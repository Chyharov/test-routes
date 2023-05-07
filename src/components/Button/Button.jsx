import React from 'react';
import s from './Button.module.scss'



function Button(props) {
    const { onClick, text, className, ariaLabel } = props;

  return (
    <button type="button" className={`${s.button} ${className}`} onClick={onClick} aria-label={ariaLabel}>
      {text}
    </button>
  );
}

export default Button;