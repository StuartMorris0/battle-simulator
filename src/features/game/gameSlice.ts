import { createSlice } from '@reduxjs/toolkit';

import type { AppThunk } from 'store/';

const STARTING_HEALTH = 100;

const rollDice = () => (Math.round(Math.random() * 100) % 6) + 1;

const initialState: GameState = {
  player1: {
    playerName: 'PLAYER',
    dice1: 0,
    dice2: 0,
    health: {
      current: STARTING_HEALTH,
      lost: undefined,
    },
    hasWon: false,
  },
  opponent: {
    playerName: 'MONSTER',
    dice1: 0,
    dice2: 0,
    health: {
      current: STARTING_HEALTH,
      lost: undefined,
    },
    hasWon: false,
  },
  rollMessage: 'Tap ATTACK to start...',
  status: 'waiting',
};

/**
 * gameSlice Reducers
 * This could be setup as a single reducer that handles all the flow in one update.
 * However, routed for a more singular action flow and dispatching all actions in a thunk. In the event that these needed to be handled as separate steps.
 */

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    makeRoll: (state) => {
      // Handles resetting state and generating dice values
      state.status = 'rolling';
      state.player1.dice1 = rollDice();
      state.player1.dice2 = rollDice();
      state.player1.health.lost = undefined;
      state.opponent.dice1 = rollDice();
      state.opponent.dice2 = rollDice();
      state.opponent.health.lost = undefined;
    },
    handleAttack: (state) => {
      // Handles caculating the attack amount for the roll winner
      state.status = 'attacking';
      const { player1, opponent } = state;
      const playerTotal = player1.dice1 + player1.dice2;
      const opponentTotal = opponent.dice1 + opponent.dice2;
      if (playerTotal === opponentTotal) {
        state.rollMessage = 'Tie!';
      } else if (playerTotal > opponentTotal) {
        // player should attack
        const roundScore = playerTotal - opponentTotal;
        state.opponent.health.current -= roundScore;
        state.opponent.health.lost = roundScore;
        state.rollMessage = `You hit for ${roundScore}`;
      } else {
        // opponent should attack
        const roundScore = opponentTotal - playerTotal;
        state.player1.health.current -= roundScore;
        state.player1.health.lost = roundScore;
        state.rollMessage = `Monster hit for ${roundScore}`;
      }
    },
    checkGameStatus: (state) => {
      // Checks the game status based on remaining health of players
      if (state.player1.health.current < 1 || state.opponent.health.current < 1) {
        state.status = 'complete';
        if (state.player1.health.current < 1) {
          state.opponent.hasWon = true;
        } else {
          state.player1.hasWon = true;
        }
      } else {
        state.status = 'waiting';
      }
    },
    reset(state) {
      Object.assign(state, initialState);
    },
  },
});

// Exporting the individual actions, used to delay the time between rolling and handling attack and game status
// Alternatively could call makeQuickRoll which will dispatch each action in order so no role time.

export const { makeRoll, handleAttack, checkGameStatus, reset } = gameSlice.actions;

export const makeQuickRoll = (): AppThunk => (dispatch) => {
  dispatch(makeRoll());
  dispatch(handleAttack());
  dispatch(checkGameStatus());
};

export default gameSlice.reducer;
