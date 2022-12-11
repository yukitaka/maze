import "@solidjs/testing-library";
import { createEdges, createVertexes, listUpAround } from "~/lib/spanningtree";

describe("Spanning Tree", () => {
  it("create edges", () => {
    const vertexes = createVertexes(3, 3);
    const edges = createEdges(vertexes);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const vertex = [i, j];
        const edge = edges[vertex];
        expect(edge.length).toBe(listUpAround(vertexes, vertex).length);
      }
    }
  })

  it("create vertexes", () => {
    const vertexes = createVertexes(3, 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        expect(vertexes[j][i]).toEqual([i, j]);
      }
    }
  });

  it("listup around of vertex", () => {
    const vertexes = createVertexes(3, 3);
    const around = listUpAround(vertexes, vertexes[1][1]);

    expect(around.length).toBe(4);
    expect(around).toEqual([[0, 1], [1, 0], [1, 2], [2, 1]]);
  })
});
