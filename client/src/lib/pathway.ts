import { Edge } from "~/lib/spanningtree";
export default function pathway(size: number, edges: Edge[]) : any[] {
  let maze = [];
  for (let h = 0; h < size * 2 + 1; h++) {
    let row = [];
    for (let w = 0; w < size * 2 + 1; w++) {
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
    maze[x1 + 1][y1 + 1] = 0;
    maze[x2 + 1][y2 + 1] = 0;
    maze[x3 + 1][y3 + 1] = 0;
  }

  return maze;
}