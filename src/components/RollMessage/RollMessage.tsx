import React from 'react';

import { useAppSelector } from 'hooks/storeHooks';

import { RollMessageSpan, RollMessageWrapper } from './RollMessage.styles';

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

const RollMessage: React.FC = () => {
  const { rollMessage, player1, opponent } = useAppSelector((state) => state.game);
  const playerHasWon = player1.hasWon;
  const opponentHasWon = opponent.hasWon;

  return <RollMessageWrapper>{generateMessage(rollMessage, playerHasWon, opponentHasWon)}</RollMessageWrapper>;
};

export default RollMessage;
