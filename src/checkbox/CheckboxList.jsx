import "./checkbox.css";
import { trash } from "./icon";
import { Checkbox } from "./Сheckbox";
import { useState } from "react";
import Button from "../buttons/button";

export default function CheckboxList() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Write Essay", isClicked: false, status: "todo" },
    {
      id: 2,
      name: "One Hour CSS Course Online",
      isClicked: false,
      status: "todo",
    },
    {
      id: 3,
      name: "Buy One Way Tickets to San Fransico",
      isClicked: false,
      status: "todo",
    },
    { id: 4, name: "Go to Gym", isClicked: false, status: "todo" },
    { id: 5, name: "Buy Groceries", isClicked: false, status: "todo" },
  ]);
  const [active, setActive] = useState("todo");
  const changeStatus = (status) => {
    setActive(status);
  };
  const [checkedIds, setCheckedIds] = useState([]);
  const onCheckboxToggle = (id) => {
    let newCheckedIds = [];
    if (checkedIds.includes(id)) {
      newCheckedIds = checkedIds.filter((item) => item !== id);
    } else {
      newCheckedIds = [...checkedIds, id];
    }
    setCheckedIds(newCheckedIds);
  };

  const deleteForever = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    setCheckedIds(checkedIds.filter((item) => item !== id));
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
  const handleMoveBackToTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id ===id) {
        return { ...todo, isClicked: false };
      }
      return todo;
    });
    setTodos(updatedTodos);
   
  };
  
   // const newCheckedIds = checkedIds.filter((checkedId) => checkedId !== id);
    // setCheckedIds(newCheckedIds);

  return (
    <div>
      <Button
        changeStatus={changeStatus}
        active={active}
        todos={todos}
        setTodos={setTodos}
      />

      <div className="todoList">
        {todos.map((item, index) => (
          <Checkbox
            item={item}
            deleteForever={() => deleteForever(item.id)}
            key={item.id}
            onCheckboxToggle={onCheckboxToggle}
            checked={checkedIds.includes(item.id)}
            handleMoveBackToTodo={() => handleMoveBackToTodo(item.id)}
          
          />
        ))}
      </div>

      <button onClick={handleMoveToTrash} className="trash">
        {trash}Move to trash
      </button>
    </div>
  );
}
