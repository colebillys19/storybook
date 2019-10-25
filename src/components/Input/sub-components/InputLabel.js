import React from 'react';
import T from 'prop-types';

import ConditionalRender from 'utils/ConditionalRender';
import { LabelWrapper, StyledIcon } from './InputLabel.styles';

const InputLabel = ({
  className,
  Icon,
  text,
  Tooltip,
}) => (
  <LabelWrapper className={className}>
    <span>{text}</span>
    <ConditionalRender
      Component={<StyledIcon Icon={Icon} Tooltip={Tooltip} />}
      shouldRender={!!Icon}
    />
  </LabelWrapper>
);

InputLabel.propTypes = {
  className: T.string,
  Icon: T.oneOfType([T.func, T.element]),
  text: T.string,
  Tooltip: T.oneOfType([T.func, T.element]),
};

export default InputLabel;
