export default class CalculationHelper {
  private static add(n1: number, n2: number): number {
    return n1 + n2;
  }
  
  private static subtract(n1: number, n2: number): number {
    return n1 - n2;
  }
  
  private static multiply(n1: number, n2: number): number {
    return n1 * n2;
  }
  
  private static divide(n1: number, n2: number): number {
    return n1 / n2;
  }
  
  static calculate(entryCache: string): number {
    let result = 0;
    const parsed = entryCache.split(' ');
    
    console.log('on enter', parsed);
    return result;
  }
  
}