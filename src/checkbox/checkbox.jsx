import "../checkbox/checkbox.css";
import CheckboxMenu from "./checkboxMenu";
import dot from "./dots.png";
import { trash } from "./icon";
export default function Checkbox() {
  return (
    <div className="Checkbox">
      <CheckboxMenu />
      <div>
        <button className="trash">{trash}Move to trash</button>
      </div>
    </div>
  );
}
