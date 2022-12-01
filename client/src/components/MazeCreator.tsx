import { createRouteAction } from "solid-start";
import spanningTree from "~/lib/spanningtree";
import pathway from "~/lib/pathway";
import "./MazeCreator.css";

export default function MazeCreator(props) {
  const [creator, { Form }] = createRouteAction(async (form: FormData) => {
    const width = parseInt(form.get("width").toString());
    const height = parseInt(form.get("height").toString());
    const st = spanningTree(width, height);
    const maze = pathway(width, height, st);

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
