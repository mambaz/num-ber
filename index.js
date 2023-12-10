const checkType = require("check-typeof");

/**
 * Formats a number with commas as thousands separators and decimal format
 * @param   {number}   number                   The number to format
 * @param   {number}   decimals                 Decimal limit
 * @param   {string}   decimalSeparator         Decimal separator format
 * @param   {string}   numberSeparator          Thousands separator format
 * @param   {string}   fallback                 Fallback value if the input is invalid (optional)
 * @returns {string|Error}                      Returns a formatted number with separators or an Error object
 */
module.exports.format = function (
  number,
  decimals = 0,
  decimalSeparator = ".",
  numberSeparator = ",",
  fallback = null
) {
  if (!checkType.isNumber(number)) {
    if (fallback !== null) {
      return fallback;
    } else {
      throw new Error("Invalid input: Not a number");
    }
  }

  const num = Number.isFinite(+number) ? +number : 0;
  const absDecimals = Math.abs(decimals);
  const decimalLimit = Number.isFinite(absDecimals) ? absDecimals : 0;

  const formattedNumber = decimalLimit
    ? num.toFixed(decimalLimit)
    : num.toString();

  const parts = formattedNumber.split(".");
  parts[0] = parts[0].replace(
    /\B(?=(\d{3})+(?!\d))/g,
    numberSeparator === "" ? "" : numberSeparator
  );

  const separator =
    decimalSeparator === "" && decimalLimit !== 0 ? "." : decimalSeparator;

  return parts.join(separator);
};
