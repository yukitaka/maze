import "@solidjs/testing-library";
import { createVertexes, listUpAround } from "~/lib/spanningtree";

describe("Spanning Tree", () => {
  it("create vertexes", () => {
    const vertexes = createVertexes(3, 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        expect(vertexes[i][j]).toEqual([i, j]);
      }
    }
  });

  it("listup around of vertex", () => {
    const vertexes = createVertexes(3, 3);
    const around = listUpAround(vertexes, vertexes[1][1]);

    console.log(around);
    expect(around.length).toBe(4);
    expect(around).toEqual([[0, 1], [1, 0], [1, 2], [2, 1]]);
  })
});
