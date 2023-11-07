import { Operator } from '../constants';

export class CalculationHelper {
  private static readonly operatorMap = new Map<Operator, (n1: number, n2: number) => number>([
    [Operator.ADD, (n1, n2) => (n1 + n2)],
    [Operator.SUBTRACT, (n1, n2) => (n1 - n2)],
    [Operator.MULTIPLY, (n1, n2) => (n1 * n2)],
    [Operator.DIVIDE, (n1, n2) => (n1 / n2)],
  ]);
  
  static calculate(inputHistory: Array<Operator | number>): number {
    let result = undefined;
    for (let i = 0; i < inputHistory.length; i++) {
      if (this.operatorMap.has(inputHistory[i] as Operator)) {
        const n1 = result ?? +inputHistory[i - 1];
        const n2 = +inputHistory[i + 1];
        result = this.operatorMap.get(inputHistory[i] as Operator)!(n1, n2);
      }
    }
    return result as unknown as number;
  }
}
