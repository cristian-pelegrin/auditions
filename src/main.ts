import LineByLine from 'n-readlines';

import { sensorNames } from './config';
const sensorNamesValues: string[] = Object.values<string>(sensorNames);

import { getSensorBasesFromFileHeader } from './helpers';
import {Vehicle} from "./models/vehicle";

type OutputType = {
  [key: string]: string[]
}

export const evaluate = async (filename: string): Promise<OutputType> => {
  const liner = new LineByLine(filename);
  const fileHeader: string = liner.next().toString();
  const sensorBases = getSensorBasesFromFileHeader(fileHeader);

  const vehicles: { [id: string]: Vehicle } = {};

  let fileRow: any;
  let currentSensorName: sensorNames | null = null;
  let currentVehicleId: string | null = null;
  while (fileRow = liner.next()) {
    const rowItems: string[] = fileRow.toString().split(' ');

    if (sensorNamesValues.includes(rowItems[0])) {
      currentSensorName = rowItems[0] as sensorNames;
      currentVehicleId = rowItems[1];
      vehicles[currentVehicleId] = vehicles[currentVehicleId] || new Vehicle({ id: currentVehicleId });
      continue;
    }

    if(currentSensorName && currentVehicleId) {
      const sensorValue: number = Number(rowItems[1]);
      vehicles[currentVehicleId].addSensorValue(
        currentSensorName,
        sensorBases[currentSensorName],
        sensorValue
      );
    }
  }

  let report: OutputType = {};
  for (const [_, vehicle] of Object.entries(vehicles)) {
    report = {
      ...report,
      ...vehicle.getReport()
    }
  }

  return report;
}
