import '../styles/buttons.css';
import Button from './Button';

export interface ButtonsProps {
  //
}

const Buttons = (props: ButtonsProps) => {
  const buttons = [
    {
      text: 'add',
      handler: () => {
      },
    },
    {
      text: 'subtract',
      handler: () => {
      },
    },
    {
      text: 'multiply',
      handler: () => {
      },
    },
    {
      text: 'divide',
      handler: () => {
      },
    },
    {
      text: 'reset input',
      handler: () => {
      },
      isReset: true,
    },
    {
      text: 'reset result',
      handler: () => {
      },
      isReset: true,
    },
  ];
  
  return (
    <>
      {buttons.map(it => (
        <Button text={it.text} handler={it.handler} isReset={it.isReset ?? false} />
      ))}
    </>
  );
};

export default Buttons;