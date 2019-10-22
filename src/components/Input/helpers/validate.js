import isEqual from 'lodash/isEqual';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';
import moment from 'moment';

const isBlank = (value) =>
  isUndefined(value) || isNull(value) || value.length === 0 || isEmptyString(value);

const isEmptyString = (str) => {
  if (typeof str === 'string') {
    return (/^\s*$/).test(str);
  }
  return false;
};

const validateNumber = (number) => {
  const numberWithoutCommas = number.replace(/,/g, '');
  const convertedNumber = Number(numberWithoutCommas);
  if (isEqual(convertedNumber, NaN) || convertedNumber < 0 || number === 'Infinity') {
    return ({
      error: 'invalidValue',
      message: 'Invalid number',
    });
  }
  return false;
};

const validateNumberRange = (number, { max, min }) => {
  const numberWithoutCommas = number.replace(/,/g, '');
  const convertedNumber = Number(numberWithoutCommas);
  const isLessThanMin = min > convertedNumber;
  const isGreaterThanMax = max < convertedNumber;
  if (min && isLessThanMin && convertedNumber !== 0) {
    return {
      error: 'invalidValue',
      message: `Invalid value. Value must be greater than or equal to ${min}`,
    };
  }
  if (max && isGreaterThanMax) {
    return {
      error: 'invalidValue',
      message: `Invalid value. Value must be less than or equal to ${max}`,
    };
  }
  return false;
};

const validateDate = (date) => {
  if (!moment(date).isValid()) {
    return (
      {
        error: 'invalidValue',
        message: 'Invalid date',
      }
    );
  }
  return false;
};

const validatePercentage = (number) => {
  const convertedNumber = Number(number);
  if (isEqual(convertedNumber, NaN)) {
    return ({
      error: 'invalidValue',
      message: 'Invalid number',
    });
  }
  if (convertedNumber <= 0 || convertedNumber > 100) {
    return ({
      error: 'invalidValue',
      message: 'Invalid Value',
    });
  }
  return false;
};


const validateGreaterThanZero = (number) => {
  const convertedNumber = Number(number);
  if (isEqual(convertedNumber, NaN)) {
    return ({
      error: 'invalidValue',
      message: 'Invalid number',
    });
  }
  if (convertedNumber <= 0) {
    return ({
      error: 'invalidValue',
      message: 'Invalid Value',
    });
  }
  return false;
};

const validateString = (str) => {
  if (typeof str !== 'string') {
    return ({
      error: 'invalidValue',
      message: 'Invalid value',
    });
  }
  return false;
};

const validateLength = (value, { length, maxLength, minLength }) => {
  if (length && value.length !== length) {
    return ({
      error: 'invalidLength',
      message: `Invalid length. Must have a length of ${length}`,
    });
  }
  if (minLength && value.length < minLength) {
    return ({
      error: 'invalidLength',
      message: `Invalid length. Must have a length greater than or equal to ${minLength}`,
    });
  }
  if (maxLength && value.length > maxLength) {
    return ({
      error: 'invalidLength',
      message: `Invalid length. Must have a length less than or equal to ${maxLength}`,
    });
  }
  return false;
};

const validateBody = (value) => validateLength(value, { maxLength: 3000 }) || validateString(value);

const validateCurrencyRange = (number, { max, min }) =>
  validateNumber(number) || validateNumberRange(number, { max, min });

const validateLoanNumber = (value) =>
  validateGreaterThanZero(value) || validateLength(value, { length: 10 });

const validatePassCode = (value) => validateLength(value, { length: 6 });

const validateSSN = (value) =>
  validateGreaterThanZero(value) || validateLength(value, { length: 4 });

const validateZipCode = (value) =>
  validateGreaterThanZero(value) || validateLength(value, { length: 5 });

const validateSubject = (value) =>
  validateLength(value, { maxLength: 100 }) || validateString(value);

const validateUsername = (value) => validateLength(value, { minLength: 5 });

const validateRoutingNumber = (value) =>
  validateGreaterThanZero(value) || validateLength(value, { maxLength: 12 });

const validatePassword = (value) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{10,})/;
  if (!re.test(value)) {
    return ({
      error: 'invalidPassword',
      message:
      'Must contain at least 1 lowercase, 1 uppercase, 1 number and at least 10 characters long',
    });
  }
  return false;
};

const validateEmail = (value) => {
  /*
  Sequence: match all of the followings in order
  CapturingGroup
  GroupNumber:1
  OR: match either of the followings
  CapturingGroup
  GroupNumber:2
  Sequence: match all of the followings in order
  Repeat
  AnyCharNotIn[ < > ( ) [ ] . , ; : WhiteSpaceCharacter @ "]
  one or more times
  Repeat as necessary until after @,
  look for . and suffix of at least 2 characters
  */
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(value)) {
    return ({
      error: 'invalidEmail',
      message: 'Invalid email address ex. jdoe@mail.com',
    });
  }
  return false;
};

const validatePhone = (phone) => {
  const numberCount = phone.replace(/\D/g, '').length;
  // MINIMUM VALID RESPONSE IS A 10 DIGIT NUMBER
  if (numberCount < 10) {
    return {
      error: true,
      message: 'Invalid phone number ex. (555) 800-0000',
    };
  }
  return false;
};

const validateConfirmInput = (value, { comparisonValue, name }) => {
  if (value !== comparisonValue) {
    return ({
      error: 'invalidMatch',
      message: `${name} does not match with previous value.`,
    });
  }
  return false;
};

export const validationDictionary = {
  bodyInput: validateBody,
  confirmInput: validateConfirmInput,
  currencyInput: validateNumber,
  currencyRangeInput: validateCurrencyRange,
  dateInput: validateDate,
  emailInput: validateEmail,
  length: validateLength,
  loanNumber: validateLoanNumber,
  nameInput: validateString,
  numberInput: validateGreaterThanZero,
  passwordInput: validatePassword,
  percentInput: validatePercentage,
  phoneInput: validatePhone,
  routingInput: validateRoutingNumber,
  selectInput: validateString,
  smsPassCodeInput: validatePassCode,
  ssn: validateSSN,
  subjectInput: validateSubject,
  textarea: validateString,
  textInput: validateString,
  usernameInput: validateUsername,
  zipCode: validateZipCode,
};

export const validate = ({
  required,
  type,
  value,
  ...validationProps
}) => {
  if (required && isBlank(value)) {
    return ({
      error: 'isRequired',
      message: 'Required field',
    });
  }
  if (!Array.isArray(type)) {
    const validationFunction = validationDictionary[type];
    return validationFunction(value, validationProps);
  }
  // If multiple validationTypes, return the first error encountered or false if no errors
  return type.reduce((acc, validationType) => {
    if (acc) return acc;
    const validationFunction = validationDictionary[validationType];
    return validationFunction(value, validationProps);
  }, false);
};
