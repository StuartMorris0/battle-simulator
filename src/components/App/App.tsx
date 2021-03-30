import React from 'react';

import GamePlayer from 'components/GamePlayer';
import { makeRollAsync } from 'features/game/gameSlice';
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';

import { GameWrapper, StyledWrapper } from './App.styles';

const App: React.FC = () => {
  const game = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(makeRollAsync());
  };

  return (
    <StyledWrapper>
      <GameWrapper>
        <GamePlayer player={game.player1} display="ltr" />
        <GamePlayer player={game.opponent} display="rtl" />
      </GameWrapper>
      <div>
        <button type="button" onClick={handleOnClick} disabled={game.status !== 'waiting'}>
          Attack
        </button>
      </div>
    </StyledWrapper>
  );
};

export default App;
