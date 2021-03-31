import { motion } from 'framer-motion';
import styled from 'styled-components';

export const GamePlayerWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 0.5;
  align-items: center;
  height: 100%;
  overflow: hidden;
`;

export const DiceHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 4px;
  padding: 12px;
  height: 120px;
  width: 80px;
`;
