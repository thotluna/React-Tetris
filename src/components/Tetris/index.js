import { useState } from "react";

import Display from "components/Display";
import Stage from "components/Stage";
import StartButton from "components/StartButton";

import { usePlayer } from "hooks/usePlayer";
import { useStage } from "hooks/useStage";

import { createStage } from "utils/gameHelper";

import { StyledTetris } from "./StyledTetris";
import { StyledTetrisWrapper } from "./StyledTetrisWrapper";

export default function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}
