import "./checkbox.css";
import { trash } from "./icon";
import { Checkbox } from "./Сheckbox";
import { useState } from "react";

export default function CheckboxList() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Write Essay", isClicked: false },
    { id: 2, name: "One Hour CSS Course Online", isClicked: false },
    { id: 3, name: "Buy One Way Tickets to San Fransico", isClicked: false },
    { id: 4, name: "Go to Gym", isClicked: false },
    { id: 5, name: "Buy Groceries", isClicked: false },
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
        return { ...todo, isClicked: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  


  
 
  
  
  
  return (
    <div>
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

      <button onClick={handleMoveToTrash}  className="trash">{trash}Move to trash</button>
    </div>
  );
        
}
      
