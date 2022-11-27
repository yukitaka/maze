import { createRouteAction } from "solid-start";
import "./MazeCreator.css";

export default function MazeCreator(props) {
  const [creator, { Form }] = createRouteAction(async (form: FormData) => {
    const width = form.get("width");
    const height = form.get("height");

    return form;
  });
  return (
    <Form>
      <label for="width-input">Width: </label>
      <input type="number" name="width" min="5" /><br />
      <label for="width-input">Height: </label>
      <input type="number" name="height" min="5" /><br />
      <button
        class="creator"
        onClick={() => props.setMaze([[1, 1, 1], [1, 0, 1], [1, 1, 1]])}
        disabled={creator.pending}
      >
        Create
      </button>
    </Form>
  );
}
