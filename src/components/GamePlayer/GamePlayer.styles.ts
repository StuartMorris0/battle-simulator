import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { IGamePlayerProps } from './GamePlayer.types';

export const GamePlayerWrapper = styled(motion.div)<IGamePlayerProps>`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 0.5;
  align-items: center;
  height: 100%;
  overflow: hidden;

  ${({ display }: IGamePlayerProps) =>
    display === 'rtl' &&
    css`
      flex-direction: row-reverse;
    `};
`;

export const GamePlayerInfo = styled.div``;

export const DiceHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  justify-content: center;
  align-items: center;
  background: white;
  height: 60%;
  border-radius: 4px;
`;
