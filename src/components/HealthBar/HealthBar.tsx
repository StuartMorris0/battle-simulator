import React from 'react';

import { Container, CurrentHealth, HealthWrapper, LostHealth, Score } from './HealthBar.styles';
import { IHealthBarProps } from './HealthBar.types';

const Bar: React.FC<IHealthBarProps> = ({ current, lost }: IHealthBarProps) => (
  <>
    <Container data-testid="Bar">
      {lost && (
        <LostHealth
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            scale: [1.1, 1, 1.1, 1],
            x: 25,
            y: -25,
            opacity: [1, 1, 0.75, 0],
          }}
          transition={{
            duration: 2.5,
            ease: 'easeInOut',
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
          exit={{
            opacity: 0,
            scale: 0,
          }}
        >
          {`-${lost}`}
        </LostHealth>
      )}
      <HealthWrapper>
        <CurrentHealth lost={lost} current={current > 0 ? current : 0} />
      </HealthWrapper>
      <Score>{current > 0 ? current : 0}</Score>
    </Container>
  </>
);

export default Bar;
