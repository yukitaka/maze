import { createSignal, For } from "solid-js";

export default function Maze(props) {
  const [maze, _] = createSignal([
    1, 1, 1, 1, 1, 1, 1, 1, 1
  ]);
  return (
    <>
      <For each={maze()}>
        {(item) => item == 1 ? "■" : "　"}
      </For>
    </>
  )
}