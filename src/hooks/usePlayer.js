import { useState } from "react";
import { randomTetromino } from "utils/tetrominos";

export const usePlayer = () => {
  const [player, setPLayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shapre,
    callided: false,
  });

  return [player];
};
