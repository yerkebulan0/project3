import "./checkbox.css";
import dot from "./dots.png";
export default function CheckboxMenu() {
  const todos = [
    { name: "Write Essay" },
    { name: "One Hour CSS Course Online" },
    { name: "Buy One Way Tickets to San Fransico" },
    { name: "Go to Gym" },
    { name: "Buy Groceries" },
  ];
  return (
    <div>
      {todos.map((item, index) => (
        <div className="checkboxIter">
          <img
            style={{ height: 10, width: 2.5 }}
            src={dot}
            alt="Plus"
            className="dot"
          />
          <input className="CheckboxInput" type="Checkbox"></input>
          <p className="CheckboxText">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
