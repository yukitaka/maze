import Header from "~/components/Header";
import Maze from "~/components/Maze";
import MazeCreator from "~/components/MazeCreator";
import "./index.css";
import { createSignal } from "solid-js";

export default function Home() {
  const [maze, setMaze] = createSignal([[1, 1, 1], [0, 1, 0], [1, 1, 1]]);

  return (
    <main>
      <Header />
      <MazeCreator setMaze={setMaze} />
      <Maze maze={maze()} />
    </main>
  );
}
