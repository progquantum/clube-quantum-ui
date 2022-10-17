export const toBase64 = (source: string) =>
  typeof window === 'undefined'
    ? Buffer.from(source).toString('base64')
    : window.btoa(source);
