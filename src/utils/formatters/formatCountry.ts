export function formatCountry(country: string) {
  const formattedCountry = country.replace(/\d/gi, '');

  return formattedCountry;
}
