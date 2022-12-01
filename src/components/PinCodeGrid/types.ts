export type PinCodeGridProps = {
  pinCode: Array<string>;
  onPinChange: (pinEntry: string, index: number) => void;
  pinLength: number;
};
