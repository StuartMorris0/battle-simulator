import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: 100vh;
`;

export const GameWrapper = styled.div`
  display: flex;
  height: 80%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    background: #66bb6a;
    color: white;
    padding: 20px 40px;
    border: 1px solid white;
    outline: none;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: -1px;

    &:hover {
      background-color: #3b903f;
    }
    &:disabled {
      background-color: #a9a9a9;
      border-color: #a9a9a9;
    }
  }
`;

export const TitleWrapper = styled(motion.div)`
  color: white;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  padding: 12px;
`;
