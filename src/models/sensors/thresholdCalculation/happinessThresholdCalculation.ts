import { sum } from 'stats-lite';

import { CalculableThreshold } from "./calculableThreshold";

export class HappinessThresholdCalculation implements CalculableThreshold {

  aboveThreshold(values: number[], base: number): boolean {
    const sumValues: number = sum(values);

    return (sumValues > (1.2 * base));
  }
}