import { createRouteAction } from "solid-start";
import spanningTree from "~/lib/spanningtree";
import "./MazeCreator.css";

export default function MazeCreator(props) {
  const [creator, { Form }] = createRouteAction(async (form: FormData) => {
    const width = form.get("width").toString();
    const height = form.get("height").toString();
    let maze = [];
    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        row[j] = (Math.random() < 0.5 ? 1 : 0);
      }
      maze[i] = row;
    }
    const st = spanningTree(parseInt(width), parseInt(height));
    console.log(st);

    props.setMaze(maze);
  });
  return (
    <Form>
      <label for="width-input">Width: </label>
      <input type="number" name="width" min="5" /><br />
      <label for="width-input">Height: </label>
      <input type="number" name="height" min="5" /><br />
      <button
        class="creator"
        disabled={creator.pending}
      >
        Create
      </button>
    </Form>
  );
}
