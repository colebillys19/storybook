import styled from 'styled-components';
import { msBrightPurple } from '../../../utils/defaultStyleHelper';

export const StyledWrapper = styled.div`
  color: ${({ color }) => color || msBrightPurple};
  position: relative;
  & .DateInput_input {
    font-size: 1.4rem;
    font-weight: 500;
  }
  & .DateInput_input {
    border: none;
    color: ${({ color }) => color || msBrightPurple};
    padding: 1rem 0 1rem 2.1rem;
  }
  & .SingleDatePickerInput_calendarIcon {
    margin: 0 2.1rem 0 1.1rem;
    padding: 0;
  }
  & .SingleDatePickerInput_calendarIcon svg {
    height: 1.8rem;
    position: relative;
    top: 0.2rem;
    width: 1.8rem;
  }
`;
