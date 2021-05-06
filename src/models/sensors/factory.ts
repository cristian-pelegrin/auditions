import { sensorNames } from '../../config';
import { Sensor } from "./sensor";
import {
  LoudnessThresholdCalculation,
  BumpinessThresholdCalculation,
  HappinessThresholdCalculation
} from "./thresholdCalculation";

export function getNewSensor(name: sensorNames, base: number): Sensor {
  const sensor: Sensor = new Sensor({ name, base });;
  switch (name) {
    case sensorNames.LOUDNESS:
      sensor.setThresholdCalculation(new LoudnessThresholdCalculation());
      break;
    case sensorNames.BUMPINESS:
      sensor.setThresholdCalculation(new BumpinessThresholdCalculation());
      break;
    case sensorNames.HAPPINESS:
      sensor.setThresholdCalculation(new HappinessThresholdCalculation());
      break;
  }

  return sensor;
}