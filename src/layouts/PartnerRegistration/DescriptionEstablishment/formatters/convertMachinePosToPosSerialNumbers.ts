interface MachinePos {
  id: string;
  serie: string;
  secret_token: string;
}

export const convertMachinePosToPosSerialNumbers = (
  machinePos: MachinePos[],
): {
  pos_serial_number: string;
  secretToken: string;
}[] =>
  machinePos.map(({ serie, secret_token }) => ({
    pos_serial_number: serie,
    secretToken: secret_token,
  }));
