import React from 'react';

import Dice from 'components/Dice';
import HealthBar from 'components/HealthBar';
import PlayerAvatar from 'components/PlayerAvatar';

import { DiceHolder, GamePlayerWrapper } from './GamePlayer.styles';
import { IGamePlayerProps } from './GamePlayer.types';

const GamePlayer: React.FC<IGamePlayerProps> = ({ player, isRolling }: IGamePlayerProps) => {
  const {
    playerName,
    dice1,
    dice2,
    health: { current, lost },
    hasWon,
  } = player;
  return (
    <GamePlayerWrapper data-testid="GamePlayer" animate={{ scale: 1 }} className="player">
      <PlayerAvatar name={playerName} hasWon={hasWon} />
      <DiceHolder>
        <Dice value={dice1} isRolling={isRolling} />
        <Dice value={dice2} isRolling={isRolling} />
      </DiceHolder>
      <HealthBar current={current} lost={lost} />
    </GamePlayerWrapper>
  );
};

export default GamePlayer;
