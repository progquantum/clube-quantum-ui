export function getCurrentNodeEnv() {
  if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
    return 'homolog.quantum.com.vc';
  }
  if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
    return 'quantum.com.vc';
  }
  if (process.env.NEXT_PUBLIC_NODE_ENV === 'local') {
    return 'localhost:3000';
  }
}
