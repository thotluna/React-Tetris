import Display from "components/Display";
import Stage from "components/Stage";
import StartButton from "components/StartButton";
import { createStage } from "utils/gameHelper";
import { StyledTetris } from "./StyledTetris";
import { StyledTetrisWrapper } from "./StyledTetrisWrapper";

export default function Tetris() {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}
