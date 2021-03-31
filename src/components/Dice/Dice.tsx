import React from 'react';

import blank from 'assets/icons/dice/blank.svg';
import five from 'assets/icons/dice/five.svg';
import four from 'assets/icons/dice/four.svg';
import one from 'assets/icons/dice/one.svg';
import six from 'assets/icons/dice/six.svg';
import three from 'assets/icons/dice/three.svg';
import two from 'assets/icons/dice/two.svg';

import { Rolled, RollingDice } from './Dice.styles';
import { IDiceProps } from './Dice.types';

const getImageSource = (value: number) => {
  switch (value) {
    case 1:
      return one;
    case 2:
      return two;
    case 3:
      return three;
    case 4:
      return four;
    case 5:
      return five;
    case 6:
      return six;
    default:
      return blank;
  }
};

const Dice: React.FC<IDiceProps> = ({ value, isRolling }: IDiceProps) => {
  if (isRolling) {
    return (
      <RollingDice
        data-testid="RollingDice"
        animate={{ scale: [1, 0.75, 0.5, 0.5, 1], rotate: [0, 0, 270, 270, 0], borderRadius: ['20%', '20%', '50%', '50%', '20%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 1.5 }}
      >
        <img src={blank} alt="Rolling..." />
      </RollingDice>
    );
  }

  if (value !== undefined) {
    const imageSrc = getImageSource(value);
    return (
      <Rolled data-testid="RolledDice" animate={{}} whileHover={{ scale: 1.2 }}>
        <img src={imageSrc} alt="dice" />
      </Rolled>
    );
  }
  return null;
};

export default Dice;
