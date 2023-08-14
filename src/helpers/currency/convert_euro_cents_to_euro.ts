// Converts a value in euro cents to euros with two decimal places
export function convertEuroCentsToEuro(euroCents: number): string {
  const euroAmount = euroCents / 100;
  const euroFormatted = euroAmount.toLocaleString('nl-NL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return euroFormatted;
}
