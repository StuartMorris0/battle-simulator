import React from 'react';

import monster from 'assets/icons/avatars/monster.svg';
import player from 'assets/icons/avatars/player.svg';

import { AvatarImg, PlayerAvatarWrapper } from './PlayerAvatar.styles';
import { IPlayerAvatarProps } from './PlayerAvatar.types';
import Trophies from './Trophies';

const PlayerAvatar: React.FC<IPlayerAvatarProps> = ({ name, hasWon }: IPlayerAvatarProps) => {
  const animation = hasWon ? { scale: [1, 1.2, 1, 1.2, 1] } : {};
  const transition = hasWon ? { ease: 'linear', duration: 1.2, repeat: Infinity } : {};
  const imageSrc = name === 'PLAYER' ? player : monster;
  return (
    <PlayerAvatarWrapper data-testid="PlayerAvatar" animate={animation} transition={transition}>
      {hasWon && <Trophies />}
      <AvatarImg src={imageSrc} alt={name} />
      <span>{name}</span>
    </PlayerAvatarWrapper>
  );
};

export default PlayerAvatar;
