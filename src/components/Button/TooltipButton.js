import React from 'react';
import T from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import BaseButton from './BaseButton';
import ForwardRef from '../../utils/ForwardRef';

const TooltipButton = ({
  enterDelay,
  placement,
  tooltipText,
  ...restProps
}) => (
  <Tooltip
    classes={{ tooltip: 'tooltip' }}
    enterDelay={enterDelay}
    placement={placement}
    title={tooltipText}
  >
    <ForwardRef Component={BaseButton} {...restProps} />
  </Tooltip>
);

TooltipButton.defaultProps = {
  enterDelay: 100,
  placement: 'top',
};

TooltipButton.propTypes = {
  enterDelay: T.number,
  placement: T.string,
  tooltipText: T.string.isRequired,
};

export default TooltipButton;
