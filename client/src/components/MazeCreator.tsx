import { FormError } from "solid-start/data";
import { createServerAction$ } from "solid-start/server";

export default function MazeCreator() {
  const [creator, { Form }] = createServerAction$(async (form: FormData) => {
    const width = form.get("width");
    const height = form.get("height");
  });
  return (
    <Form>
      <input type="number" name="width" min="5" />
      <input type="number" name="height" min="5" />
      <button class="creator">
        Create
      </button>
    </Form>
  );
}
