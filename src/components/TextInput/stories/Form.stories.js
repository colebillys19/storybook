import React, { useState } from 'react';
import styled from 'styled-components';

import {
  BaseTextInput,
  CreditCardInput,
  CurrencyInput,
  NumberInput,
  PasswordInput,
  PhoneInput,
  TextAreaInput,
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
    number: '',
    password: '',
    phone: '',
    textArea: '',
  });

  const handleInputChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
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
      <button type="submit">SUBMIT</button>
    </form>
  );
};

DefaultStory.story = { name: 'default' };
