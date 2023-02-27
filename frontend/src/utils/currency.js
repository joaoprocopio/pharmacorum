export const currency = {
  format: (number, maximumFractionDigits) =>
    Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits,
    }).format(number),
}
