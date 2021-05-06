import { sensorNames } from "../config";
import { Sensor, getNewSensor } from './sensors';

interface VehicleSensors {
  [name: string]: Sensor;
}

interface VehicleReport {
  [key: string]: string[];
}

export class Vehicle {
  id: string;
  sensors: VehicleSensors;

  constructor(params: { id: string }) {
    this.id = params.id;
    this.sensors = {};
  }

  public addSensorValue(sensorName: sensorNames, base: number, value: number): void {
    if (!this.sensors[sensorName]) {
      this.sensors[sensorName] = getNewSensor(sensorName, base);
    }
    this.sensors[sensorName].addValue(value);
  }

  public getReport(): VehicleReport {
    const sensorsWithAnomalies: string[] = [];
    for (const [name, sensor] of Object.entries(this.sensors)) {
      if ((sensor as Sensor).needService()) {
        sensorsWithAnomalies.push(name);
      }
    }

    return { [this.id]: sensorsWithAnomalies };
  }

}