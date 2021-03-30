declare interface PlayerHealth {
  current: number;
  lost: number | undefined;
}

declare interface Player {
  playerName: string;
  dice1: number;
  dice2: number;
  health: PlayerHealth;
  hasWon: boolean;
}
