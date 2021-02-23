import Display from "components/Display";
import Stage from "components/Stage";
import StartButton from "components/StartButton";

import { useInterval } from "hooks/useInterval";

import { StyledTetrisWrapper } from "./StyledTetrisWrapper";
import { StyledTetris } from "./StyledTetris";

export default function Tetris({ data }) {
  const {
    stage,
    gameOver,
    score,
    rows,
    level,
    dropTime,
    startGame,
    drop,
    keyUp,
    move,
  } = data;

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
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}
