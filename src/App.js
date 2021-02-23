import Tetris from "components/Tetris";
import { useGame } from "hooks/useGame";

function App() {
  const gameConrtoller = useGame();

  return (
    <div className="App">
      <Tetris data={gameConrtoller} />
    </div>
  );
}

export default App;
