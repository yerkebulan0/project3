import "./checkbox.css";
import { trash } from "./icon";
import { Checkbox } from "./Сheckbox";
import { useState } from "react";
import Button from "../buttons/button";


export default function CheckboxList() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Write Essay", isClicked: false, status: "todo" },
    {id: 2,name: "One Hour CSS Course Online",isClicked: false,status: "todo",},
    {id: 3,name: "Buy One Way Tickets to San Fransico",isClicked: false,status: "todo",},
    { id: 4, name: "Go to Gym", isClicked: false, status: "todo" },
    { id: 5, name: "Buy Groceries", isClicked: false, status: "todo" }, 
  ]);

  const [checkedIds, setCheckedIds] = useState([]);
  const onCheckboxToggle = (id) => {
    let newCheckedIds = [];
    if (checkedIds.includes(id)) {
      newCheckedIds = checkedIds.filter((item) => item !== id);
    } else {
      newCheckedIds = [...checkedIds, id];
    }
    setCheckedIds(newCheckedIds);
    console.log(newCheckedIds);
  };
  const handleMoveToTrash = () => {
    const updatedTodos = todos.map((todo) => {
      if (checkedIds.includes(todo.id)) {
        return { ...todo, isClicked: true, status: "trash" };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div> 
      <Button />
     
      <div className="todoList">
        {todos.map((item, index) => (
          <Checkbox
            item={item}
            key={index}
            onCheckboxToggle={onCheckboxToggle}
            checked={checkedIds.includes(item.id)}
          />
        ))}
      </div>

      <button onClick={handleMoveToTrash} className="trash">
        {trash}Move to trash
      </button>
    </div>
  );
}
