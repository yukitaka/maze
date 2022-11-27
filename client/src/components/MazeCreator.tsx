import { createRouteAction } from "solid-start";
import { redirect } from "solid-start/server";
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
        onClick={() => props.setMaze()}
        disabled={creator.pending}
      >
        Create
      </button>
    </Form>
  );
}
