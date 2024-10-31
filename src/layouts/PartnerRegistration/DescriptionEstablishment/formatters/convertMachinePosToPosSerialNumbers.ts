interface MachinePos {
  id: string;
  serie: string;
  secretToken: string;
}

export const convertMachinePosToPosSerialNumbers = (
  machinePos: MachinePos[],
): {
  pos_serial_number: string;
  secretToken: string;
}[] =>
  machinePos.map(({ serie, secretToken }) => ({
    pos_serial_number: serie,
    secretToken,
  }));
