import React from 'react';
import { ActionType, useAppContext } from '../context/AppContext';
import './styles/number-input.css';
import Button from './ui/Button';

interface NumberInputProps {
  value: string | number,
  onChangeHandler: (value: string) => void
}

const NumberInput = ({ value, onChangeHandler }: NumberInputProps): React.ReactElement => {
  return (
    <div className="number-input-container">
      <input
        className="number-input"
        inputMode="numeric"
        value={value}
        onChange={(event) => onChangeHandler(event.target.value)}
      />
    </div>
  );
};

const NumberInputContainer = (): React.ReactElement => {
  const { state, dispatch } = useAppContext();
  
  const onInputChange = (value: string) => {
    dispatch({
      type: ActionType.UPDATE_INPUT_VALUE,
      value,
    });
  };
  
  const onEnterClicked = () => {
    if (state.inputHistory.length > 0 && state.result == null) {
      dispatch({ type: ActionType.UPDATE_RESULT });
    }
  };
  
  return (
    <div className="number-input-container">
      <NumberInput value={state.currentInputValue ?? ''} onChangeHandler={onInputChange} />
      <Button text="ENTER" handler={onEnterClicked} isEnter />
    </div>
  );
};

export default NumberInputContainer;