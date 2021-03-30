import { motion } from 'framer-motion';
import styled from 'styled-components';

export const RollingDice = styled(motion.div)`
  margin: 4px;
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 10px;
  overflow: hidden;
  & img {
    width: 50px;
    height: 50px;
  }
`;

export const Rolled = styled(motion.div)`
  display: block;

  & img {
    width: 50px;
    height: 50px;
  }
`;
