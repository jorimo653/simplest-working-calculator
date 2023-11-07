import { Operator } from '../../constants';
import { ActionType, useAppContext } from '../../context/AppContext';
import '../styles/buttons.css';
import Button from './Button';

export interface ButtonsProps {
  //
}

const Buttons = (props: ButtonsProps) => {
  const { state, dispatch } = useAppContext();
  
  const currentInputValid = (): boolean => {
    return !!state.currentInputValue && !isNaN(+state.currentInputValue);
  };
  
  const buttons = [
    {
      text: 'add',
      handler: () => {
        if (currentInputValid()) {
          dispatch({
            type: ActionType.UPDATE_INPUT_HISTORY,
            operator: Operator.ADD,
          });
        }
      },
    },
    {
      text: 'subtract',
      handler: () => {
        if (currentInputValid()) {
          dispatch({
            type: ActionType.UPDATE_INPUT_HISTORY,
            operator: Operator.SUBTRACT,
          });
        }
      },
    },
    {
      text: 'multiply',
      handler: () => {
        if (currentInputValid()) {
          dispatch({
            type: ActionType.UPDATE_INPUT_HISTORY,
            operator: Operator.MULTIPLY,
          });
        }
      },
    },
    {
      text: 'divide',
      handler: () => {
        if (currentInputValid()) {
          dispatch({
            type: ActionType.UPDATE_INPUT_HISTORY,
            operator: Operator.DIVIDE,
          });
        }
      },
    },
    {
      text: 'reset input',
      handler: () => {
        dispatch({ type: ActionType.CLEAR_INPUT });
      },
      isReset: true,
    },
    {
      text: 'reset result',
      handler: () => {
        dispatch({ type: ActionType.CLEAR_RESULT });
      },
      isReset: true,
    },
  ];
  
  return (
    <>
      {buttons.map((it, idx) => (
        <Button text={it.text} handler={it.handler} isReset={it.isReset ?? false} key={idx} />
      ))}
    </>
  );
};

export default Buttons;