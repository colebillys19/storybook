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

// replaces everything except digits.
export const formatNumbers = (value) => value.replace(/[^\d]/g, '');

// replaces everything except letter characters, spaces, dashes '-',
// and periods. used for name inputs
export const formatText = (value) => value.replace(/[^a-zA-Z\s-.]/g, '');
