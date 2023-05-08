import "./checkbox.css";
import { trash } from "./icon";
import { Checkbox } from "./Сheckbox";
import Dropdown from "./Dropdown";
import { useState,useRef } from "react";

export default function CheckboxList() {
  
  const [todos,setTodos] = useState([
    { id: 1, name: "Write Essay" },
    { id: 2, name: "One Hour CSS Course Online" },
    { id: 3, name: "Buy One Way Tickets to San Fransico" },
    { id: 4, name: "Go to Gym" },
    { id: 5, name: "Buy Groceries" },
  ])
 
  const deleteById = id => {
    setTodos(oldValues => {
      return oldValues.filter(item => item.id !== 1)
    })
  }
 

  return (
    <div>
      <div className="todoList">
        {todos.map((item, index) => (
          <Checkbox item={item} key={index}/>
        ))}
      </div>
      
      <button onClick={(item) => deleteById(item.id)} className="trash">{trash}Move to trash</button>
    </div>
   
  );
  
}
