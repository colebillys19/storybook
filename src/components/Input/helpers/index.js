import isNumber from 'lodash/isNumber';

// replaces everything except digits.
export const formatNumbers = (value) => value.replace(/[^\d]/g, '');

// replaces everything except letter characters, spaces, dashes '-',
// and periods. used for name inputs
export const formatText = (value) => value.replace(/[^a-zA-Z\s-.]/g, '');

/**
 * @description Ensures only valid currency characters are entered (digits, commas, and periods).
 * If a decimal has been entered, will ensure that only 2 decimal places can be entered and it
 * will replace any characters that are not digits.
 * @param {string} value
 * @return {string} A string representing a properly formatted currency amount.
 * Note: This will not prevent multiple commas being entered in the dollar amount section.
 * For example: 12,,,34.00 will be allowed.
 */
export const formatCurrency = (value) => {
  const currencyCharsOnly = value.replace(/[^\d,.]/g, '');
  const decimalPosition = currencyCharsOnly.indexOf('.');
  const hasDecimal = decimalPosition >= 0;
  if (hasDecimal) {
    const [dollar, cents] = currencyCharsOnly.split('.');
    const formattedCents = cents.slice(0, 2).replace(/[^\d]/g, '');
    return [dollar, formattedCents].join('.');
  }
  return currencyCharsOnly;
};

/**
 * @description Converts a currency amount (string or number) into a currency display
 * string with $ and ,
 * @param {[string, number]} amount The original maount to convert.
 * This value can be a string or a number
 * @param {boolean} withAdorn (Defaults to true) If withAdorn is true, the '$' will be added in
 * front of the return amount. If withAdorn is false, the $ will not be added.
 * @return {string} The formatted amount with(or without) $ and commas.
 * For example: 12345.12 -> $12,345.12
 */
export function formatAmountsWithCommas(amount, withAdorn = true) {
  const formattedAmount = isNumber(amount)
    ? amount
    : convertCurrencyStrToNumber(amount);
  const splitAmount = parseFloat(formattedAmount)
    .toFixed(2)
    .toString()
    .split('.');
  splitAmount[0] = splitAmount[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${withAdorn ? '$' : ''}${splitAmount.join('.')}`;
}

/**
 * @description convert currency string with $ and , to number for sorting purposes
 *
 * @param {string} currencyString string of the amount you want converted to a number
 * @return {number} converted string to number
 */
export function convertCurrencyStrToNumber(currencyString) {
  return Number(currencyString.replace(/(^\$|,)/g, '')) || 0;
}
