import React from 'react';

import GamePlayer from 'components/GamePlayer';
import { makeRollAsync } from 'features/game/gameSlice';
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';

import { StyledWrapper } from './App.styles';

const App: React.FC = () => {
  const game = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(makeRollAsync());
  };

  return (
    <StyledWrapper>
      <div>{game.status}</div>
      <div>{game.rollMessage}</div>
      <GamePlayer player={game.player1} />
      <GamePlayer player={game.opponent} />
      <button type="button" onClick={handleOnClick} disabled={game.status !== 'waiting'}>
        Attack
      </button>
    </StyledWrapper>
  );
};

export default App;
