import React from 'react';
import './App.css';
import NumberInput from './components/NumberInput';
import ResultLine from './components/ResultLine';
import Buttons from './components/ui/Buttons';
import Header from './components/ui/Header';
import { appName } from './constants';
import AppContextProvider from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <div className="container">
        <div className="inner inner-top">
          <Header text={appName} />
          <ResultLine />
          <NumberInput />
        </div>
        <div className="inner inner-bottom">
          <Buttons />
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
