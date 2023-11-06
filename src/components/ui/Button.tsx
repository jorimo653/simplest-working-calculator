import React from 'react';
import '../styles/button.css';

export interface ButtonProps {
  text: string,
  handler: () => void,
  isReset?: boolean,
  isEnter?: boolean
}

const Button = ({ text, handler, isReset = false, isEnter = false }: ButtonProps): React.ReactElement => {
  
  return (
    <div className={`button ${isReset ? 'button-reset' : 'button-default'}`} onClick={handler}>
      <div className="button-text">{text}</div>
    </div>
  );
};

export default Button;