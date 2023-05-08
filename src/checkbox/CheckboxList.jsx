import "./checkbox.css";
import { trash } from "./icon";
import { Checkbox } from "./Сheckbox";
import Dropdown from "./Dropdown";
import { useState,useRef } from "react";

export default function CheckboxList() {
  
  const [todos,setTodos] = useState([
    { id: 1, name: "Write Essay",isClicked:false },
    { id: 2, name: "One Hour CSS Course Online",isClicked:false},
    { id: 3, name: "Buy One Way Tickets to San Fransico",isClicked:false},
    { id: 4, name: "Go to Gym",isClicked:false},
    { id: 5, name: "Buy Groceries",isClicked:false},
  ])
 
  const [checkedIds, setCheckedIds] = useState([]);
  const [menuItems, setMenuitems] = useState(todos); 

  const onCheckboxToggle = (id) => {
    let newCheckedIds = [];
    if (checkedIds.includes(id)) {
      newCheckedIds = checkedIds.filter((item) => item !== id);
    } else {
      newCheckedIds = [...checkedIds, id];
    }
    setCheckedIds(newCheckedIds);
    console.log(newCheckedIds)
  };
  const handleChange = (id) =>{
    console.log(id);
    const menuItem = menuItems.find((item)=>item.id===id)
    console.log(menuItem)

  }
  

  // const Line = {
  //   textDecoration: "line-through",
  // }
  // const handleClick = (event) => {
  //   if (event.target.style.textDecoration) {
  //     event.target.style.removeProperty('text-decoration');
  //   } else {
  //     event.target.style.setProperty('text-decoration', 'line-through');
  //   }
  // };
 
  // const onMoveToTrashClicked = () => {
  //   const newTodos = todos.filter((item) => !checkedIds.includes(item.id));
  //   setTodos(newTodos);
  //   setCheckedIds([]);
  // };

  return (
    <div>
      <div className="todoList">
        {todos.map((item, index) => (
          <Checkbox item={item} key={index}
          onCheckboxToggle={onCheckboxToggle}                                                             />
        ))}
      </div>
      
      <button onClick={handleChange}    className="trash">{trash}Move to trash</button>
    </div>
   
  );
  
}

/*

`
import dot from "./dots.png";
import Dropdown from "./Dropdown";
import { useState } from "react";
import "./checkbox.css";
import React from "react";

export const Checkbox = (props) => {
  const { item, onCheckboxToggle } = props;

  const [showDropdown, setShowDropdown] = useState(false);
  const [check, setCheck] = useState(false);
  if (check) {
    const lineNew = item.name;
  }
  // const Line = {
  //   textDecoration: "line-through",

  //   color: "#959595",
  // };
  const backGr = {
    background: "#E4E6E7",
  };

  return (
    <div
      className="checkboxIter"
      style={{ padding: "0px", ...(check && backGr) }}
    >
      <div className="DDot" onClick={() => setShowDropdown(!showDropdown)}>
        <img
          style={{ height: 10, width: 2.5 }}
          src={dot}
          alt="Plus"
          className="dot"
        />
      </div>{" "}
      <div style={{ gap: 16, display: "flex" }}>
        <input
          onChange={() => {
            setCheck(!check);
            onCheckboxToggle(item.id);
          }}
          className="CheckboxInput"
          type="Checkbox"
        ></input>
        <p className="CheckboxText">{item.name}</p>
      </div>
      {showDropdown && <Dropdown />}
    </div>
  );
};

`







`
import "./checkbox.css";
import { trash } from "./icon";
import { Checkbox } from "./Сheckbox";
import { useState } from "react";

export default function CheckboxList() {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([
    { id: 1, name: "Write Essay" },
    { id: 2, name: "One Hour CSS Course Online" },
    { id: 3, name: "Buy One Way Tickets to San Fransico" },
    { id: 4, name: "Go to Gym" },
    { id: 5, name: "Buy Groceries" },
  ]);

  const [checkedIds, setCheckedIds] = useState([]); // галочка койылгандардын айдишкалары

  const onCheckboxToggle = (id) => {
    let newCheckedIds = [];
    if (checkedIds.includes(id)) {
      newCheckedIds = checkedIds.filter((item) => item !== id);
    } else {
      newCheckedIds = [...checkedIds, id];
    }
    setCheckedIds(newCheckedIds);
  };

  const onMoveToTrashClicked = () => {
    const newTodos = todos.filter((item) => !checkedIds.includes(item.id));
    setTodos(newTodos);
    setCheckedIds([]);
  };

  return (
    <div>
      <div className="todoList">
        {todos.map((item) => (
          <Checkbox
            item={item}
            key={item.id}
            onCheckboxToggle={onCheckboxToggle}
          />
        ))}
      </div>
      <button
        onClick={(item) => {
          onMoveToTrashClicked();
        }}
        className="trash"
      >
        {trash}Move to trash
      </button>
    </div>
  );
}
`

*/