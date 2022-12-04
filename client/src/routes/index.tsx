import Header from "~/components/Header";
import Maze from "~/components/Maze";
import MazeCreator from "~/components/MazeCreator";
import "./index.css";
import { createSignal } from "solid-js";

export default function Home() {
  const [maze, setMaze] = createSignal([]);

  return (
    <main>
      <Header />
      <MazeCreator setMaze={setMaze} />
      <Maze maze={maze()} />
    </main>
  );
}
