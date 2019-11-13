import styled from 'styled-components';
import { ssMainBlue } from '../../../utils/defaultStyleHelper';
import { mediaQueriesByDevice } from '../../../utils/breakpoints';

export const DatePickerErrorLabel = styled.span`
  color: #f44336;
  font-size: 1.2rem;
  margin-left: .5rem;
  position: absolute;
  transform: translate(15px,-15px) scale(0.9);
`;

export const StyledWrapper = styled.div`
  color: ${({ color }) => color || ssMainBlue};
  position: relative;
  width: fit-content;
  
  & .SingleDatePicker {
    min-width: 20rem;

    ${mediaQueriesByDevice.mobile} {
      min-width: 15rem;
    }
  }
  & .SingleDatePickerInput {
    border-color: ${({ error }) => error ? '#f44336' : null}
  }

  & .DateInput {
    width: 75%;
  }

  & .DateInput_input {
    border: none;
    color: ${({ color }) => color || ssMainBlue};
    font-size: 1.4rem;
    font-weight: 500;

    ${mediaQueriesByDevice.mobile} {
      padding: 1rem 0rem 1rem 0.9rem;
    }
  }

  & .SingleDatePickerInput_calendarIcon {
    padding: 1rem 1rem 1.3rem;

    ${mediaQueriesByDevice.mobile} {
      margin-left: 0.4rem;
      padding: 0rem 0rem 0.4rem;
    }
  }

  & .SingleDatePickerInput_calendarIcon_svg {
    fill: ${({ color }) => color || ssMainBlue};
  }
`;
