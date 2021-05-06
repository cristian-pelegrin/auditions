export interface CalculableThreshold {
  aboveThreshold(values: number[], base: number): boolean;
}