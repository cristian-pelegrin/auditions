import { Mensurable } from './mensurable';
import { CalculableThreshold } from "./thresholdCalculation";

export class Sensor implements Mensurable {
  name: string;
  base: number;
  values: number[];
  thresholdCalculation: CalculableThreshold;

  constructor(params: {
    name: string,
    base: number
  }) {
    this.name = params.name;
    this.base = params.base;
    this.values = [];
  }

  public getName(): string {
    return this.name;
  }

  public addValue(value: number): void {
    this.values.push(value);
  }

  public setThresholdCalculation(thresholdCalculation: CalculableThreshold): void {
    this.thresholdCalculation = thresholdCalculation;
  }

  public needService(): boolean {
    return this.thresholdCalculation.aboveThreshold(
      this.values,
      this.base
    )
  };
}
