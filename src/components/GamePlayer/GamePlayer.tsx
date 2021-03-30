import React from 'react';

import { GamePlayerWrapper } from './GamePlayer.styles';

declare interface IGamePlayerProps {
  player: Player;
}

const GamePlayer: React.FC<IGamePlayerProps> = ({ player }: IGamePlayerProps) => {
  const {
    playerName,
    dice1,
    dice2,
    health: { current, lost },
    hasWon,
  } = player;
  return (
    <GamePlayerWrapper data-testid="GamePlayer">
      <div>name: {playerName}</div>
      <div>dice: {dice1}</div>
      <div>dice2: {dice2}</div>
      <div>health.current: {current}</div>
      <div>health.lost: {lost}</div>
      <div>hasWon: {hasWon ? 'true' : 'false'}</div>
    </GamePlayerWrapper>
  );
};

export default GamePlayer;
