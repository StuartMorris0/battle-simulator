import React from 'react';

import { Container, CurrentHealth, HealthWrapper, LostHealth, Score } from './HealthBar.styles';
import { IHealthBarProps } from './HealthBar.types';

const Bar: React.FC<IHealthBarProps> = ({ current, lost }: IHealthBarProps) => (
  <>
    <LostHealth>{lost && `-${lost}`}</LostHealth>
    <Container data-testid="Bar">
      <HealthWrapper>
        <CurrentHealth lost={lost} current={current > 0 ? current : 0} />
      </HealthWrapper>
      <Score>{current > 0 ? current : 0}</Score>
    </Container>
  </>
);

export default Bar;
