export type PinCodeGridProps = {
  pinCode: Array<number | undefined>
  onPinChange: (pinEntry: number | undefined, index: number) => void
  pinLength: number
}
