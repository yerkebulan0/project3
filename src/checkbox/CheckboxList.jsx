import "./checkbox.css";
import { trash } from "./icon";
import { Checkbox } from "./Сheckbox";
import Dropdown from "./Dropdown";

export default function CheckboxList() {
  const todos = [
    { id: 1, name: "Write Essay" },
    { id: 2, name: "One Hour CSS Course Online" },
    { id: 3, name: "Buy One Way Tickets to San Fransico" },
    { id: 4, name: "Go to Gym" },
    { id: 5, name: "Buy Groceries" },
  ];

  return (
    <div>
      <div className="todoList">
        {todos.map((item, index) => (
          <Checkbox item={item} key={index} />
        ))}
      </div>
      <button className="trash">{trash}Move to trash</button>
    </div>
  );
}
