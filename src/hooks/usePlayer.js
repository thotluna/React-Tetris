import { useCallback, useState } from "react";
import { STAGE_WIDTH } from "utils/gameHelper";
import { randomTetromino, TETROMINOS } from "utils/tetrominos";

export const usePlayer = () => {
  const [player, setPLayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    callided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    setPLayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };
  const resetPlayer = useCallback(() => {
    setPLayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      callided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer];
};
