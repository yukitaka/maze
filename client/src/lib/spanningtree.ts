export default function spanningTree(width: number, height: number) {
  const vertexes: [[number, number]] = createVertexes(width, height);

  return vertexes;
}

function createVertexes(width: number, height: number): [[number, number]] {
  let vertexes = [];
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      vertexes.push([i, j]);
    }
  }

  return vertexes;
}