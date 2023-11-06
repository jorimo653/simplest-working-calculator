import React from 'react';
import './styles/number-input.css';
import Button from './ui/Button';

const NumberInput = (): React.ReactElement => {
  const value = '123';
  return (
    <div className="number-input-container">
      <input
        className="number-input"
        inputMode="numeric"
        value={value}
        onChange={() => {
        }}
      />
    </div>
  );
};

const NumberInputContainer = (): React.ReactElement => {
  const handler = () => {
  };
  return (
    <div className="number-input-container">
      <NumberInput />
      <Button text="ENTER" handler={handler} isEnter />
    </div>
  );
};

export default NumberInputContainer;