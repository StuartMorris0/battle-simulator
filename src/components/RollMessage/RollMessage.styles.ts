import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const RollMessageWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: center;
`;

export const RollMessageSpan = styled(motion.span)<{ playerHasWon: boolean; opponentWon: boolean }>`
  font-size: 26px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  background: #505050;
  padding: 30px;
  text-align: center;
  box-shadow: none;

  ${(props) =>
    props.playerHasWon &&
    css`
      color: green;
      padding: 10px;
    `};

  ${(props) =>
    props.opponentWon &&
    css`
      color: red;
      padding: 10px;
    `}
`;
