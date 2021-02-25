import Display from "components/Display";
import Stage from "components/Stage";
import StartButton from "components/StartButton";

import { useInterval } from "hooks/useInterval";

import { StyledTetrisWrapper } from "./StyledTetrisWrapper";
import { StyledTetris } from "./StyledTetris";
import { useStageMin } from "hooks/useMinStage";

import { stateGame } from "types";

export default function Tetris({ data }) {
  const {
    player,
    stage,
    gameState,
    // pause,
    score,
    rows,
    level,
    dropTime,
    startGame,
    pauseGame,
    drop,
    keyUp,
    move,
  } = data;

  const [minStage] = useStageMin(player.nextTetromino);

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={(e) => keyUp(e)}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameState === stateGame.GAME_OVER ? (
            <Display
              alert={gameState === stateGame.GAME_OVER}
              text="Game Over"
            />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
              {gameState === stateGame.IN_GAME && (
                <Stage stage={minStage} min="true" />
              )}
            </div>
          )}
          {gameState === stateGame.IN_GAME || gameState === stateGame.PAUSE ? (
            <StartButton
              callback={pauseGame}
              text={gameState === stateGame.IN_GAME ? "Pause" : "Restart"}
            />
          ) : (
            <StartButton callback={startGame} text="Start Game" />
          )}
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}
