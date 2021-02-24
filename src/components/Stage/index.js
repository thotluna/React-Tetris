import Cell from "components/Cell";
import React from "react";
import { StyledMinStage, StyledStage } from "./StyledStage";

export default function Stage({ stage, min }) {
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
