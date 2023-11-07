import React from 'react';
import { Action, useAppContext } from '../context/AppContext';
import './styles/number-input.css';
import Button from './ui/Button';

const NumberInput = (): React.ReactElement => {
  const { state, dispatch } = useAppContext();
  const onChangeHandler = (value: string) => {
    const action: Action = { type: 'updateCurrentInputValue', payload: value };
    console.log('onChangeHandler: action', action);
    dispatch(action);
  };
  return (
    <div className="number-input-container">
      <input
        className="number-input"
        inputMode="numeric"
        value={state.currentInputValue ?? ''}
        onChange={(event) => onChangeHandler(event.target.value)}
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