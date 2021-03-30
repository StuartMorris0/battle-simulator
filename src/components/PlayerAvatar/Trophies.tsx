import React from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;
`;

const Trophies = (): JSX.Element => {
  const scale = [2, 2.2, 2.4, 2.2, 2];
  const opacity = [0, 0.2, 0.5, 1, 0.5, 0];

  return (
    <StyledWrapper>
      <motion.div
        animate={{
          scale,
          opacity,
          x: 300,
          y: -300,
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.25, 0.5, 0.75, 1],
          loop: Infinity,
          repeatDelay: 1,
        }}
      >
        <span role="img" aria-label="trophy">
          🏆
        </span>
      </motion.div>
      <motion.div
        animate={{
          scale,
          opacity,
          x: -300,
          y: -300,
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.25, 0.5, 0.75, 1],
          loop: Infinity,
          repeatDelay: 1,
        }}
      >
        <span role="img" aria-label="trophy2">
          🏆
        </span>
      </motion.div>
      <motion.div
        animate={{
          scale,
          opacity,
          y: -300,
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.25, 0.5, 0.75, 1],
          loop: Infinity,
          repeatDelay: 1,
        }}
      >
        <span role="img" aria-label="trophy2">
          🏆
        </span>
      </motion.div>
    </StyledWrapper>
  );
};

export default Trophies;
