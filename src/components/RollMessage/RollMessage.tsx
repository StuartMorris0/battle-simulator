import React from 'react';

import { RollMessageSpan, RollMessageWrapper } from './RollMessage.styles';
import { IRollMessageProps } from './RollMessage.types';

const generateWinnerMessage = (playerWon: boolean) => (
  <RollMessageSpan playerHasWon={playerWon} opponentWon={!playerWon} animate={{ rotate: [0, 45, 0, -45, 0] }} transition={{ ease: 'linear', duration: 10, repeat: Infinity }}>
    {playerWon ? 'You won!' : 'Game Over'}
  </RollMessageSpan>
);

const generateRollMessage = (rollMessage: string) => (
  <RollMessageSpan playerHasWon={false} opponentWon={false} animate={{ scale: [1, 1.1, 1] }}>
    {rollMessage}
  </RollMessageSpan>
);

const generateMessage = (rollMessage: string, playerWon: boolean, opponentWon: boolean) => {
  if (playerWon || opponentWon) {
    return generateWinnerMessage(playerWon);
  }
  return generateRollMessage(rollMessage);
};

const RollMessage: React.FC<IRollMessageProps> = ({ message, playerHasWon, opponentHasWon }: IRollMessageProps) => {
  return <RollMessageWrapper>{generateMessage(message, playerHasWon, opponentHasWon)}</RollMessageWrapper>;
};

export default RollMessage;
