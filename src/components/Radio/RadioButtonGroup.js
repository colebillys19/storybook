import React from 'react';
import T from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';

import { StyledFormControlLabel, StyledRadioButton } from './styles/Radio.styles';

export const RadioButtonGroup = ({
  onChange,
  options,
  row,
  selected,
  ...restProps
}) => {
  const radio = (
    <StyledRadioButton
      classes={{ checked: 'checked', root: 'radio' }}
      {...restProps}
    />
  );

  return (
    <FormControl classes={{ root: 'form' }} {...restProps}>
      <RadioGroup
        classes={{ root: 'group' }}
        onChange={(e) => onChange(e.target.value)}
        row={row}
        value={selected}
        {...restProps}
      >
        {
          options.map(({ label, value }) => (
            <StyledFormControlLabel
              key={`radio-option-${value}`}
              classes={{ label: 'label' }}
              control={radio}
              label={label}
              value={value}
              {...restProps}
            />
          ))
        }
      </RadioGroup>
    </FormControl>
  );
};

RadioButtonGroup.defaultProps = { row: false };

RadioButtonGroup.propTypes = {
  /**
   *  Callback fired when a radio button is selected.
   */
  onChange: T.func.isRequired,
  /**
   * The options displayed in the RadioButtonGroup.
   * 
   * An array of objects with properties label and value.
   */
  options: T.arrayOf(T.shape({
    label: T.string,
    value: T.oneOfType([T.bool, T.number, T.string]).isRequired,
  })).isRequired,
  /**
   * If true, displays the radio group in a row.
   */
  row: T.bool,
  /**
   *
   */
  selected: T.oneOfType([T.bool, T.number, T.string]),
};

export default RadioButtonGroup;
