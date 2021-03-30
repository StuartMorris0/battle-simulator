import React from 'react';

import five from 'assets/icons/dice/five.svg';
import four from 'assets/icons/dice/four.svg';
import one from 'assets/icons/dice/one.svg';
import six from 'assets/icons/dice/six.svg';
import three from 'assets/icons/dice/three.svg';
import two from 'assets/icons/dice/two.svg';
import { useAppSelector } from 'hooks/storeHooks';

import { Rolled, RollingDice } from './Dice.styles';
import { IDiceProps } from './Dice.types';

const getImageSource = (value: number) => {
  let imageSrc = '';
  switch (value) {
    case 1:
      return one;
    case 2:
      imageSrc = two;
      break;
    case 3:
      imageSrc = three;
      break;
    case 4:
      imageSrc = four;
      break;
    case 5:
      imageSrc = five;
      break;
    default:
      imageSrc = six;
      break;
  }
  return imageSrc;
};

const Dice: React.FC<IDiceProps> = ({ value }: IDiceProps) => {
  const gameStatus = useAppSelector((state) => state.game.status);
  const isRolling = gameStatus === 'rolling';

  if (isRolling) {
    return <RollingDice />;
  }

  if (value) {
    const imageSrc = getImageSource(value);
    console.log(`imageSrc : ${imageSrc}`);
    return (
      <Rolled>
        <img src={imageSrc} alt="One" />
      </Rolled>
    );
  }
  return null;
};

export default Dice;
