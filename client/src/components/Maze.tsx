import { createSignal, For } from "solid-js";

export default function Maze(props) {
  return (
    <>
      <For each={props.maze}>{
        items => <div>{items.map((item) => item == 1 ? 'o' : ' ')}</div>
      }</For>
    </>
  )
}