import { createSignal, For } from "solid-js";
import "./Maze.css";

export default function Maze(props) {
  return (
    <div class="maze">
      <For each={props.maze}>{
        items => <div>{items.map((item) => item == 1 ? '■' : '□')}</div>
      }</For>
    </div>
  )
}