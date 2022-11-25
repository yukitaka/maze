import { createSignal, For } from "solid-js";

export default function Maze(props) {
  return (
    <>
      <For each={props.maze}>
        {(item) => item == 1 ? "■" : "　"}
      </For>
    </>
  )
}