export type Data = Record<string, string | Record<string, string>>

export type SignUpStateContextData = {
  data: Data;
}

export type SignUpDispatchContextData = {
  saveData: (data: Data) => void;
}
