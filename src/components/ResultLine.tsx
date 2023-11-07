import React from 'react';
import { useAppContext } from '../context/AppContext';
import './styles/result.css';

const ResultLine = () => {
  const { state } = useAppContext();
  
  return (
    <div className="result-line">
      <div className="entry-history">
        {state.inputHistory}
      </div>
      <div className="result">
        {state.result && (
          `Result: ${state.result}`
        )}
      </div>
    </div>
  );
};

export default ResultLine;