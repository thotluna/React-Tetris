import { useState } from "react";
import { checkCollision, createStage } from "utils/gameHelper";
import { useGameStatus } from "./useGameStatus";
import { usePlayer } from "./usePlayer";
import { useStage } from "./useStage";

import { stateGame } from "types";

export const useGame = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameState, setGameState] = useState(stateGame.OFF);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      console.log("moving");
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    console.log("test");
    setStage(createStage());
    resetPlayer();
    setDropTime(1000);
    console.log(player.pos);
    setGameState(stateGame.IN_GAME);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const pauseGame = () => {
    !dropTime && setDropTime(1000 / (level + 1) + 200);
    setGameState((prev) => {
      if (prev === stateGame.IN_GAME) return stateGame.PAUSE;
      return stateGame.IN_GAME;
    });
  };

  const drop = () => {
    if (gameState === stateGame.IN_GAME) {
      if (rows > (level + 1) * 10) {
        setLevel((prev) => prev + 1);
        setDropTime(1000 / (level + 1) + 200);
      }

      if (!checkCollision(player, stage, { x: 0, y: 1 })) {
        updatePlayerPos({ x: 0, y: 1, collided: false });
      } else {
        if (player.pos.y < 1) {
          console.log("GAME OVER!!!");
          setDropTime(null);
          setGameState(stateGame.GAME_OVER);
        }
        updatePlayerPos({ x: 0, y: 0, collided: true });
      }
    }
  };

  const keyUp = ({ keyCode }) => {
    if (gameState === stateGame.IN_GAME) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1) + 200);
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }) => {
    if (gameState === stateGame.IN_GAME) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  return {
    player,
    stage,
    gameState,
    score,
    rows,
    level,
    dropTime,
    startGame,
    pauseGame,
    drop,
    keyUp,
    move,
  };
};
