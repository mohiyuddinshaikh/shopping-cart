export function formatToIndianCurrency(num: number) {
  const strNum = num.toString();
  const lastThreeDigits = strNum.slice(-3); // Get the last three digits
  const otherDigits = strNum.slice(0, -3); // Get the remaining digits

  const formattedOtherDigits = otherDigits.replace(
    /\B(?=(\d{2})+(?!\d))/g,
    ","
  );

  return otherDigits
    ? formattedOtherDigits + "," + lastThreeDigits
    : lastThreeDigits;
}
