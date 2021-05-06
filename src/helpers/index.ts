export function getSensorBasesFromFileHeader(header: string): { [name: string]: number } {
  const headerItems: string[] = header.split(' ');
  const sensorBases: { [name: string]: number } = {};
  for (let i = 1; i < headerItems.length; i += 2) {
    const sensorName: string = headerItems[i];
    const sensorBase: number = Number(headerItems[i+1]);
    sensorBases[sensorName] = sensorBase;
  }

  return sensorBases;
}