import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PlayerAvatarWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 4px;
  padding: 10px;
  position: relative;
`;

export const AvatarImg = styled(motion.img)`
  width: 50px;
  margin: 12px;
`;
