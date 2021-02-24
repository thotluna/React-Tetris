import { useState, useEffect } from "react";
import { createStage } from "utils/gameHelper";

function sweepRows(newStage, setRowsCleared) {
  return newStage.reduce((ack, row) => {
    if (row.findIndex((cell) => cell[0] === 0) === -1) {
      setRowsCleared((prev) => prev + 1);
      ack.unshift(new Array(newStage[0].length).fill([0, "clear"]));
      return ack;
    }
    ack.push(row);
    return ack;
  }, []);
}

function drawUpdateStage(player, resetPlayer, prevStage, setRowsCleared) {
  const newStage = prevStage.map((row) =>
    row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
  );

  player.tetromino.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        newStage[y + player.pos.y][x + player.pos.x] = [
          value,
          `${player.collided ? "merged" : "clear"}`,
        ];
      }
    });
  });
  if (player.collided) {
    resetPlayer();
    return sweepRows(newStage, setRowsCleared);
  }
  return newStage;
}

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const updateStage = (prevStage) => {
      return drawUpdateStage(player, resetPlayer, prevStage, setRowsCleared);
    };

    setStage((prev) => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared];
};
