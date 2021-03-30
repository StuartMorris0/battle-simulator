import { motion } from 'framer-motion';
import styled from 'styled-components';

import { IHealthBarProps } from './HealthBar.types';

export const Container = styled.div`
  display: flex;
  height: 120px;
  flex-direction: column;
  position: relative;

  @media (min-width: 769px) {
    height: 260px;
  }
`;

export const LostHealth = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 25%;
  background: white;
  border-radius: 26px;
  padding: 10px;
  border: 1px solid #f1f1f1;
  font-size: 20px;
  font-weight: bold;
`;

export const Score = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`;

export const HealthWrapper = styled.div`
  background-color: white;
  flex-grow: 1;
  border-radius: 3px;
  width: 32px;
  display: flex;
  align-items: flex-end;
  padding: 2px;
`;

export const CurrentHealth = styled.div<IHealthBarProps>`
  background-color: #51da51;
  border-radius: 4px;
  display: block;
  width: 100%;
  height: ${({ current }) => current}%;
  transition: height 1s ease-in-out;

  background-color: ${({ current }) => current < 40 && `#ffc800`};
  background-color: ${({ current }) => current < 20 && `#fb4b17`};
`;
