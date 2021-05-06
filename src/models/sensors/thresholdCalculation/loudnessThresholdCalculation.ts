import { stdev } from 'stats-lite';

import { CalculableThreshold } from "./calculableThreshold";

export class LoudnessThresholdCalculation implements CalculableThreshold {
  // @ts-ignore
  aboveThreshold(values: number[], base: number): boolean {
    const standardDeviation: number = stdev(values);

    return (standardDeviation < 2);
  }
}