import React from "react";
import { StyledCell } from "./StyledCell";
import { TETROMINOS } from "utils/tetrominos";

export default function Cell({ type }) {
  return <StyledCell type={type} color={TETROMINOS[type].color} />;
}
