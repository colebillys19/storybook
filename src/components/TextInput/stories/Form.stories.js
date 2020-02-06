import React, { useState } from 'react';
import styled from 'styled-components';

import {
  BaseTextInput,
  CreditCardInput,
  CurrencyInput,
  EmailInput,
  NumberInput,
  PasswordInput,
  PhoneInput,
  TextAreaInput,
  UrlInput,
} from '../index';
import { StyledLabel } from '../../../utils/storyConstants';

export default { title: 'Inputs|Form' };

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const DefaultStory = () => {
  const [values, setValues] = useState({
    baseText: '',
    creditCard: '',
    currency: '',
    email: '',
    emailIsValid: true,
    number: '',
    password: '',
    phone: '',
    textArea: '',
    url: '',
    urlIsValid: true,
  });

  const handleInputChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleValidityChange = (prop, bool) => () => {
    setValues({ ...values, [prop]: bool });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('VALUES:');
    console.log(values);

    // const { emailIsValid, urlIsValid } = values;
    // if (!emailIsValid || !urlIsValid) {
    //   console.log('invalid input');
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <StyledLabel htmlFor="basetext-id">Base Text</StyledLabel>
        <BaseTextInput id="basetext-id" onChange={handleInputChange('baseText')} />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="creditcard-id">Credit Card</StyledLabel>
        <CreditCardInput id="creditcard-id" onChange={handleInputChange('creditCard')} />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="currency-id">Currency</StyledLabel>
        <CurrencyInput id="currency-id" onChange={handleInputChange('currency')} />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="email-id">Email</StyledLabel>
        <EmailInput
          id="email-id"
          onChange={handleInputChange('email')}
          onInvalidInput={handleValidityChange('emailIsValid', false)}
          onValidInput={handleValidityChange('emailIsValid', true)}
        />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="number-id">Number</StyledLabel>
        <NumberInput id="number-id" onChange={handleInputChange('number')} />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="password-id">Password</StyledLabel>
        <PasswordInput id="password-id" onChange={handleInputChange('password')} />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="phone-id">Phone</StyledLabel>
        <PhoneInput id="phone-id" onChange={handleInputChange('phone')} />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="textarea-id">Text Area</StyledLabel>
        <TextAreaInput id="textarea-id" onChange={handleInputChange('textArea')} />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel htmlFor="url-id">Url</StyledLabel>
        <UrlInput
          id="url-id"
          onChange={handleInputChange('url')}
          onInvalidInput={handleValidityChange('urlIsValid', false)}
          onValidInput={handleValidityChange('urlIsValid', true)}
        />
      </InputWrapper>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

DefaultStory.story = { name: 'default' };
