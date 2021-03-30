import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 20px;

  & button {
    width: 100%;
    background: #66bb6a;
    color: white;
    padding: 20px 40px;
    border: 1px solid white;
    outline: none;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: -1px;

    @media (min-width: 760px) {
      width: auto;
    }

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
