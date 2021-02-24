import { useEffect, useState } from "react";
import { createMinStage } from "utils/gameHelper";

export const useStageMin = (tetromino) => {
  const [minStage, setMinStage] = useState(createMinStage());

  useEffect(() => {
    const updateStage = (prevStage) => {
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Then draw the tetromino
      tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + 1][x + 1] = [value, "clear"];
          }
        });
      });

      return newStage;
    };

    setMinStage((prev) => updateStage(prev));
  }, [tetromino]);

  return [minStage];
};
