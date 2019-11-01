import React from 'react';
import T from 'prop-types';

import { StyledExpansionPanel } from './styles/ExpansionPanel.styles';

/**
 * Use `ExpansionPanel` when you need a lightweight container to display a summary (component/text)
 * which on click can expand to display additional details (component/text).
 */
const ExpansionPanel = ({
  children,
  classes,
  ...restProps
}) => (
  <StyledExpansionPanel
    classes={Object.assign({ expanded: 'expanded' }, classes)}
    CollapseProps={{ classes: { container: 'collapse-container' } }}
    square
    {...restProps}
  >
    {children}
  </StyledExpansionPanel>
);

ExpansionPanel.propTypes = {
  /**
   * The content of the expansion panel.
   */
  children: T.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: T.object,
  /**
   * If true, expands the panel by default.
   */
  defaultExpanded: T.bool,
  /**
   * If true, the panel will be displayed in a disabled state.
   */
  disabled: T.bool,
  /**
   * If true, expands the panel, otherwise collapse it.
   * Setting this prop enables control over the panel.
   */
  expanded: T.bool,
  /**
   * Callback fired when the expand/collapse state is changed.
   */
  onChange: T.func,
  /**
   * The component used for the collapse effect.
   */
  TransitionComponent: T.element,
  /**
   * Props applied to the Transition element.
   */
  TransitionProps: T.object,
};

ExpansionPanel.defaultProps = {
  defaultExpanded: false,
  disabled: false,
};

export default ExpansionPanel;
