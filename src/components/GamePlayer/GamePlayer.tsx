import React from 'react';

import Dice from 'components/Dice';
import HealthBar from 'components/HealthBar';

import { GamePlayerWrapper } from './GamePlayer.styles';
import { IGamePlayerProps } from './GamePlayer.types';

const GamePlayer: React.FC<IGamePlayerProps> = ({ player, ...rest }: IGamePlayerProps) => {
  const {
    playerName,
    dice1,
    dice2,
    health: { current, lost },
    hasWon,
  } = player;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <GamePlayerWrapper player={player} {...rest} data-testid="GamePlayer" animate={{ scale: 1 }}>
      <div>name: {playerName}</div>
      <Dice value={dice1} />
      <Dice value={dice2} />
      <HealthBar current={current} lost={lost} />
      <div>hasWon: {hasWon ? 'true' : 'false'}</div>
    </GamePlayerWrapper>
  );
};

export default GamePlayer;
