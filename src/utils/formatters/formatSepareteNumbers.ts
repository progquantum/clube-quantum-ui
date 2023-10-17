export function formatSepareteNumbers(str: string): [number, number] {
  const numeros = str.trim().split('/');
  const totalFriends = parseInt(numeros[0], 10);
  const limite = parseInt(numeros[1], 10);
  return [totalFriends, limite];
}
