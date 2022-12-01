import { Edge } from "~/lib/spanningtree";
export default function pathway(width: number, height: number, edges: Edge[]) {
  let maze = [];
  for (let i = 0; i < height * 2 - 1; i++) {
    let row = [];
    for (let j = 0; j < width * 2 - 1; j++) {
      row.push(1);
    }
    maze.push(row);
  }

  for (const edge of edges) {
    let x1, x2, x3, y1, y2, y3;
    if (edge["from"][0] == edge["to"][0]) {
      x1 = x2 = x3 = edge["from"][0] * 2;
      y1 = edge["from"][1] * 2;
      y2 = edge["from"][1] + edge["to"][1];
      y3 = edge["to"][1] * 2;
    } else {
      x1 = edge["from"][0] * 2;
      x2 = edge["from"][0] + edge["to"][0];
      x3 = edge["to"][0] * 2;
      y1 = y2 = y3 = edge["from"][1] * 2;
    }
    maze[x1][y1] = 0;
    maze[x2][y2] = 0;
    maze[x3][y3] = 0;
  }

  return maze;
}