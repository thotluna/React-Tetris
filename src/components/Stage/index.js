import Cell from "components/Cell";
import { memo } from "react";
import { StyledStage, StyledMinStage } from "./StyledStage";

function Stage({ stage, min = null }) {
  if (!min)
    return (
      <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map((row) =>
          row.map((cell, x) => <Cell key={x} type={cell[0]} />)
        )}
      </StyledStage>
    );
  return (
    <StyledMinStage width={stage[0].length} height={stage.length}>
      {stage.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
    </StyledMinStage>
  );
}

export default memo(Stage);
