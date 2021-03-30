import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { IDiceProps } from './Dice.types';

export const RollingDice = styled.div``;

export const Rolled = styled.div`
  display: block;

  & img {
    width: 50px;
    height: 50px;
  }
`;
