// Converts a price in euros to the corresponding amount in euro cents
export function convertEuroToEuroCents(price: string): number {
  const euroAmount = parseFloat(price.replace(/\./g, "").replace(",", "."));
  const euroCents = euroAmount * 100;
  const euroCentsRounded = Math.round(euroCents);

  return euroCentsRounded;
}
