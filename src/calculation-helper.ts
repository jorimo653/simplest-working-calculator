import { Operator } from './constants';
import { Nullable } from './types';

export class CalculationHelper {
  private static readonly operatorMap = new Map<Operator, (n1: number, n2: number) => number>([
    [Operator.ADD, (n1: number, n2: number) => (n1 + n2)],
    [Operator.SUBTRACT, (n1: number, n2: number) => (n1 - n2)],
    [Operator.MULTIPLY, (n1: number, n2: number) => (n1 * n2)],
    [Operator.DIVIDE, (n1: number, n2: number) => (n1 / n2)],
  ]);
  
  static calculate(inputHistory: Array<Operator | number>): number {
    let result = 0;
    
    console.log('parsed', inputHistory);
    
    inputHistory.forEach((it, idx) => {
      if (this.operatorMap.has(it as Operator)) {
        console.log('it: ', it);
        result = this.operatorMap.get(it as Operator)!(+inputHistory[idx - 1], +inputHistory[idx + 1]);
      }
    });
    
    console.log('result maybe? ', result);
    
    return result;
  }
}

export function buildHistoryString(previousValue: Nullable<string>, newValue: string, operator?: Operator, isLast: boolean = false): string {
  let str;
  if (previousValue == null) {
    str = `${newValue} ${operator} `;
  } else {
    str = [previousValue, newValue].join(` ${operator} `);
  }
  return str;
}