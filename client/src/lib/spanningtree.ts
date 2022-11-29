interface Edge {
  from: [number, number];
  to: [number, number];
  weight: number;
}

export default function spanningTree(width: number, height: number) {
  const vertexes: [][[number, number]] = createVertexes(width, height);
  const edges = createEdges(vertexes);
  console.log(edges);

  return vertexes;
}

function createVertexes(width: number, height: number): [][[number, number]] {
  let vertexes = [];
  for (let i = 0; i < width; i++) {
    vertexes[i] = [];
    for (let j = 0; j < height; j++) {
      vertexes[i].push([i, j]);
    }
  }

  return vertexes;
}

function createEdges(vertexes: [][[number, number]]): [Edge] {
  let edges = [];
  for (const row of vertexes) {
    for (const vertex of row) {
      const around = listUpAround(vertexes, vertex);
      for (const opposite of around) {
        edges[vertex] = { from: vertex, to: opposite, weight: 5 };
      }
    }
  }

  return edges;
}

function listUpAround(vertexes: [][[number, number]], vertex: [number, number]): [[number, number]] {
  let around = [];
  const x = vertex[0];
  const y = vertex[1];
  const left = x - 1;
  const right = x + 1;
  const top = y - 1;
  const down = y + 1;
  for (const horizon of [left, x, right]) {
    for (const vertical of [top, y, down]) {
      if (horizon == x && vertical == y) {
        continue;
      }
      if (vertexes[horizon] !== undefined) {
        if (vertexes[horizon][vertical] !== undefined) {
          around.push(vertexes[horizon][vertical]);
        }
      }
    }
  }

  return around;
}