import React, { createContext, useContext, useReducer } from 'react';
import { Operator } from '../constants';
import { Nullable } from '../types';

export interface State {
  inputHistory: Array<Operator | number>,
  currentInputValue: Nullable<number>,
  result: Nullable<number>,
}

export const defaultState: State = {
  inputHistory: [],
  currentInputValue: null,
  result: null,
};

export enum ActionType {
  UPDATE_INPUT_VALUE = 'updateCurrentInputValue',
  UPDATE_INPUT_HISTORY = 'updateInputHistory',
  UPDATE_RESULT = 'updateResult',
  CLEAR_INPUT = 'clearInput',
  CLEAR_RESULT = 'clearResult',
}

export type Action =
  | { type: ActionType.UPDATE_INPUT_VALUE, value: string }
  | { type: ActionType.UPDATE_INPUT_HISTORY, operator?: Operator }
  | { type: ActionType.UPDATE_RESULT, result: number }
  | { type: ActionType.CLEAR_INPUT }
  | { type: ActionType.CLEAR_RESULT }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.UPDATE_INPUT_VALUE:
      return { ...state, currentInputValue: +action.value };
    case ActionType.UPDATE_INPUT_HISTORY:
      return {
        ...state,
        inputHistory: [...state.inputHistory, state.currentInputValue as number, action.operator!],
        currentInputValue: null,
      };
    case ActionType.UPDATE_RESULT:
      return { ...state, result: action.result };
    case ActionType.CLEAR_INPUT:
      return { ...state, inputHistory: [], currentInputValue: null };
    case ActionType.CLEAR_RESULT:
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
  const [state, dispatch] = useReducer(reducer, defaultState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
