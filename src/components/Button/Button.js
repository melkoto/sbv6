import React from 'react';
import './Button.css';

const Button = (props) => {
  const { variant = 'promary', children, rest } = props;
  return (
    <div>
      <button className={`button ${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default Button;
