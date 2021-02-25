import React from "react";
import { StyledStartButton } from "./StyledStartButton";

export default function StartButton({ callback, text }) {
  return <StyledStartButton onClick={callback}>{text}</StyledStartButton>;
}
