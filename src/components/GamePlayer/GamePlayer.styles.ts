import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { IGamePlayerProps } from './GamePlayer.types';

const GamePlayerWrapper = styled(motion.div)<IGamePlayerProps>`
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

const GamePlayerInfo = styled.div``;

export { GamePlayerWrapper, GamePlayerInfo };
