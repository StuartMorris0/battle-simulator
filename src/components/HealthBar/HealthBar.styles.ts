import styled from 'styled-components';

import { IHealthBarProps } from './HealthBar.types';

export const Container = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
`;

export const LostHealth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Score = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
