interface Edge {
  from: [number, number];
  to: [number, number];
  weight: number;
}

export default function spanningTree(width: number, height: number) : Edge[] {
  const vertexes: [][[number, number]] = createVertexes(width, height);
  const edges = createEdges(vertexes);

  let visited = [vertexes[0][0]];
  let tree = [];
  while (visited.length < width * height) {
    let min = 10;
    let addEdges = [];
    for (const target of visited) {
      for (let edge of edges[target]) {
        if (!visited.includes(edge.to) && edge.weight <= min) {
          min = edge.weight;
          if (!addEdges[min]) {
            addEdges[min] = [edge];
          } else {
            addEdges[min].push(edge);
          }
        }
      }
    }
    for (let i = 0; i < 10; i++) {
      if (addEdges[i]) {
        for (const edge of addEdges[i]) {
          if (!visited.includes(edge.to)) {
            tree.push(edge);
            visited.push(edge.to);
          }
        }
        break;
      }
    }
  }

  return tree;
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
      edges[vertex] = [];
      for (const opposite of around) {
        let weight;
        if (edges[opposite]) {
          for (const edge of edges[opposite]) {
            if (edge["to"] == vertex) {
              weight = edge["weight"];
              break;
            }
          }
        }
        edges[vertex].push({ from: vertex, to: opposite, weight: weight || Math.floor(Math.random() * 10) });
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