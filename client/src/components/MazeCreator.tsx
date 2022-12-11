import { createRouteAction } from "solid-start";
import spanningTree from "~/lib/spanningtree";
import pathway from "~/lib/pathway";
import pave from "~/lib/corridor";
import "./MazeCreator.css";

export default function MazeCreator(props) {
  const [creator, { Form }] = createRouteAction(async (form: FormData) => {
    const size = parseInt(form.get("size").toString());
    const wh = size - Math.floor(size / 2);
    const st = spanningTree(wh);
    const maze = pathway(wh, st);
    const corridor = pave(wh, st);
    console.log(corridor);

    props.setMaze(maze);
  });
  return (
    <Form>
      <select class="size-selector" name="size">
        <option value="5">Micro</option>
        <option value="9">Mini</option>
        <option value="13">Standard</option>
        <option value="17">Large</option>
        <option value="21">Extra Large</option>
      </select>
      <button
        class="creator"
        disabled={creator.pending}
      >
        Create
      </button>
    </Form>
  );
}
