import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const RollMessageWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  flex: 0.8;

  @media (min-width: 769px) {
    height: auto;
  }
`;

export const RollMessageSpan = styled(motion.span)<{ playerHasWon: boolean; opponentWon: boolean }>`
  font-size: 26px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  background: #505050;
  padding: 12px;
  margin: 8px 0px;
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
