import { createSignal, For } from "solid-js";
import "./Maze.css";
import Wall from "~/components/Wall";
import Road from "~/components/Road";

export default function Maze(props) {

  return (
    <div class="maze" style={{ width: `${props.maze.length}em` }}>
      <For each={props.maze}>{
        items => <div>{items.map((item) => item == 1 ? (<Wall />) : (<Road />))}</div>
      }</For>
    </div>
  )
}