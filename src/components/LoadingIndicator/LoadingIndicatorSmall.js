import React from 'react';

import Circle from './Circle';
import { SmallLoadingSection, SmallWrapper } from './styles/LoadingIndicatorNormal.styles';

/**
 * Use `LoadingIndicatorSmall` when the client is waiting for async data to finish
 * loading and you don't want the loader to take up the whole view height.
 */
const LoadingIndicatorSmall = () => (
  <SmallWrapper>
    <SmallLoadingSection>
      <Circle />
      <Circle delay={-1.1} rotate={30} />
      <Circle delay={-1} rotate={60} />
      <Circle delay={-0.9} rotate={90} />
      <Circle delay={-0.8} rotate={120} />
      <Circle delay={-0.7} rotate={150} />
      <Circle delay={-0.6} rotate={180} />
      <Circle delay={-0.5} rotate={210} />
      <Circle delay={-0.4} rotate={240} />
      <Circle delay={-0.3} rotate={270} />
      <Circle delay={-0.2} rotate={300} />
      <Circle delay={-0.1} rotate={330} />
    </SmallLoadingSection>
  </SmallWrapper>
);

export default LoadingIndicatorSmall;
