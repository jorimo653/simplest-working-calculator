import React from 'react';
import './App.css';
import NumberInput from './components/NumberInput';
import Result from './components/Result';
import Buttons from './components/ui/Buttons';
import Header from './components/ui/Header';
import { appName } from './constants';

function App() {
  return (
    <div className="container">
      <div className="inner inner-top">
        <Header text={appName} />
        <Result />
        <NumberInput />
      </div>
      <div className="inner inner-bottom">
        <Buttons />
      </div>
    </div>
  );
}

export default App;
