import React, { useState,useEffect,useRef } from "react";
import "../buttons/button.css";
import img from "../buttons/Plus.png";
export default function Button(props) {
  const [addlist, setAddlist] = useState(false);
  const { active, changeStatus, todos,setTodos} = props;
  const [newTodo,setNewtodo] = useState("")
  const color = {
    backgroundColor: "rgba(8, 30, 52, 0.42)",
  };
  const color2 = {
    backgroundColor: "#F0F0F0",
  };
  const buttonRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (event.target !== buttonRef.current && !buttonRef.current.contains(event.target)) {
      setAddlist(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };}, []);
  const handleInputChange = (event) => {
    setNewtodo(event.target.value);
    console.log(newTodo)
  };
  const handleAddTodo = () =>{
    const newElement = {
      id:todos.length + 1,
      name:newTodo,
      isClicked: false,
      status: "todo",
    }
    setTodos([...todos,newElement])
  }

  return (
    <div> 
      <div className="button"  ref={buttonRef}>
        <button
          style={active === "todo" ? color : color2}
          onClick={() => changeStatus("todo")}
          className="b1"
        >
          To Do
        </button>
        <button
          style={active === "Done" ? color : color2}
          onClick={() => changeStatus("Done")}
          className="b2"
        >
          Done
        </button>
        <button
          style={active === "Trash" ? color : color2}
          onClick={() => changeStatus("Trash")}
          className="b3"
        >
          Trash
        </button>
        {addlist && (
          <div className="Addlist">
            <b>Add New To Do</b>
            <textarea
              className="Addinput"
              type="text"
              id="placeholderID"
              placeholder="Your text"
              style={{ resize: "none" }}
              onChange={handleInputChange}
            ></textarea>
            <button  onClick={handleAddTodo}>Add</button>
          </div>
        )}
        <button onClick={() => setAddlist(!addlist)} className="black">
          <img
            style={{ height: 24, width: 24 }}
            src={img}
            alt="Plus"
            className="plus"
          />
        </button>
      </div>
      <div className="mid1">
        <div className="mid">
          {active === "todo"
            ? "To Do"
            : "Done" && active === "Trash"
            ? "Trash"
            : "Done"}
        </div>
      </div>
    </div>
  );
}
