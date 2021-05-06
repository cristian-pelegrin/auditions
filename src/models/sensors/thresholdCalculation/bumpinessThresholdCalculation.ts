import { mean } from 'stats-lite';

import { CalculableThreshold } from "./calculableThreshold";

export class BumpinessThresholdCalculation implements CalculableThreshold {
  aboveThreshold(values: number[], base: number): boolean {
    const average: number = mean(values);

    return (average > (1.5 * base));
  }
}