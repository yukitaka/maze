import { Edge } from "~/lib/spanningtree";

export default function pave(size: number, edges: Edge[]) : any[] {
  let corridor = [];

  for (const edge of edges) {
    if (edge["from"][0] == edge["to"][0]) {
      const x = edge["from"][0] * 2;
      corridor.push({from: [x, edge["from"][1] * 2], to: [x, edge["to"][1] * 2]});
    } else {
      const y = edge["from"][1] * 2;
      corridor.push({from: [edge["from"][0] * 2, y], to: [edge["to"][0] * 2, y]});
    }
  }

  return corridor;
}
