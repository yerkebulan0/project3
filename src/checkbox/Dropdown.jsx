import React from "react";
import "./checkbox.css";
import { trash } from "./icon";
import { icon2 } from "./icon";

export default function Dropdown({
  deleteForever,
  onMoveBackToTodo,
  closeDropdown,
}) {
  return (
    <div className="show">
      <div
        className="firstShow"
        onClick={() => {
          deleteForever();
          closeDropdown();
        }}
        style={{ cursor: "pointer" }}
      >
        {" "}
        {trash} Delete Forever{" "}
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={onMoveBackToTodo}
        className="secondShow"
      >
        {icon2} Move Back to To Do{" "}
      </div>
    </div>
  );
}
