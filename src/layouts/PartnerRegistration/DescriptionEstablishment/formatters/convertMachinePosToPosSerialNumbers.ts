interface MachinePos {
  id: string;
  serie: string;
}

export const convertMachinePosToPosSerialNumbers = (
  machinePos: MachinePos[],
): string[] => machinePos.map(({ serie }) => serie);
