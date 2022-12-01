import { Edge } from "~/lib/spanningtree";
export default function pathway(width: number, height: number, edges: Edge[]) {
  let maze = [];
  for (let i = 0; i < height * 2; i++) {
    let row = [];
    for (let j = 0; j < width * 2; j++) {
      row.push(1);
    }
    maze.push(row);
  }

  for (const edge of edges) {
    if (edge["from"][0] == edge["to"][0]) {
      let col = maze[edge["from"][0] * 2];
      const from = edge["from"][1];
      const to = edge["to"][1];
      col[from * 2] = 0;
      col[to * 2] = 0;
      col[from + to] = 0;
    } else {
      let row = edge["from"][1] * 2;
      const from = edge["from"][0];
      const to = edge["to"][0];
      maze[from * 2][row] = 0;
      maze[to * 2][row] = 0;
      maze[from + to][row] = 0;
    }
  }

  return maze;
}