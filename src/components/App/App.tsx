import React, { useEffect } from 'react';

import GamePlayer from 'components/GamePlayer';
import RollMessage from 'components/RollMessage';
import { checkGameStatus, handleAttack, makeRoll, reset } from 'features/game/gameSlice';
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';

import { ButtonWrapper, GameWrapper, StyledWrapper, TitleWrapper } from './App.styles';

const ROLLTIME = 1000;

const App: React.FC = () => {
  const game = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(makeRoll());
  };

  const handleGameReset = () => {
    dispatch(reset());
  };

  useEffect(() => {
    if (game.status === 'rolling') {
      window.setTimeout(() => {
        dispatch(handleAttack());
        dispatch(checkGameStatus());
      }, ROLLTIME);
    }
  }, [game.status, dispatch]);

  return (
    <StyledWrapper>
      <TitleWrapper animate={{ scale: 1, opacity: 1 }} initial={{ scale: 0.2, opacity: 0 }} transition={{ duration: 2, ease: 'linear' }}>
        BATTLE SIMULATOR
      </TitleWrapper>
      <GameWrapper>
        <GamePlayer player={game.player1} display="ltr" />
        <RollMessage />
        <GamePlayer player={game.opponent} display="rtl" />
      </GameWrapper>
      <ButtonWrapper>
        {game.status === 'complete' ? (
          <button type="button" onClick={handleGameReset}>
            Start a new game
          </button>
        ) : (
          <button type="button" onClick={handleOnClick} disabled={game.status !== 'waiting'}>
            {game.status === 'rolling' ? 'rolling...' : 'Attack'}
          </button>
        )}
      </ButtonWrapper>
    </StyledWrapper>
  );
};

export default App;
