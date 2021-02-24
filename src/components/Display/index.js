import React from "react";
import { StyledDisplay } from "./StyledDisplay";

export default function Display({ alert, text }) {
  return <StyledDisplay alert={alert}>{text}</StyledDisplay>;
}
