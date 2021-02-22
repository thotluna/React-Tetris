export const TETROMINOS = {
  0: { share: [[0]], color: "0,0,0" },
  I: {
    share: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "80, 227, 230",
  },
  J: {
    share: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "36, 95, 223",
  },
  L: {
    share: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "223, 173, 36",
  },
  O: {
    share: [
      ["0", "0"],
      ["0", "0"],
    ],
    color: "223, 217, 36",
  },
  S: {
    share: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "48, 211, 56",
  },
  T: {
    share: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "132, 61, 198",
  },
  Z: {
    share: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "127, 78, 78",
  },
};

export const randomTetromino = () => {
  const tetriminos = ["IJLOSTZ"];
  const randTetromino =
    tetriminos[Math.floor(Math.random() * tetriminos.length)];
  return TETROMINOS[randTetromino];
};
