import React, { createContext, useContext, useReducer } from 'react';
import { Nullable } from '../types';

export interface State {
  inputHistory: string,
  currentInputValue: Nullable<number>,
  result: Nullable<number>,
}

export const defaultState: State = {
  inputHistory: '',
  currentInputValue: null,
  result: null,
};

export type ActionType =
  | 'updateCurrentInputValue'
  | 'updateInputHistory'
  | 'updateResult'
  | 'clearInput'
  | 'clearResult'

export type Action = { type: ActionType, payload: string }

export interface ReducerProps {
  state: State,
  action: Action
}

function reducer(state: State, action: Action): State {
  console.log('state: ', state);
  console.log('action: ', action);
  switch (action.type) {
    case 'updateInputHistory':
      return { ...state, inputHistory: action.payload };
    case 'updateCurrentInputValue':
      return { ...state, currentInputValue: +action.payload };
    case 'updateResult':
      return { ...state, result: +action.payload };
    case 'clearInput':
      return { ...state, inputHistory: '', currentInputValue: null };
    case 'clearResult':
      return { ...state, result: null };
    default:
      return state;
  }
}

type ContextType = {
  state: State,
  dispatch: React.Dispatch<Action>
}
const AppContext = createContext<ContextType>({
  state: defaultState,
  dispatch: () => null,
});

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppContextProvider({ children }: React.PropsWithChildren): React.ReactElement {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, defaultState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
