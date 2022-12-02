import "@solidjs/testing-library";
import { createVertexes } from "~/lib/spanningtree";

describe("Spanning Tree", () => {
  it("create vertexes", () => {
    const vertexes = createVertexes(3, 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        expect(vertexes[i][j]).toEqual([i, j]);
      }
    }
  });
});
