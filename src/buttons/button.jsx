import React, { useState } from "react";
import "../buttons/button.css";
import img from "../buttons/Plus.png";
export default function Button() {
  const [addlist, setAddlist] = useState(false);
  const [active, setActive] = useState("todo");
  const changeStatus = (status) => {
    setActive(status);
  };

  return (
    <div>
      <div className="button">
        <button onClick={() => changeStatus("todo")} className="b1">
          To Do
        </button>
        <button onClick={() => changeStatus("Done")} className="b2">
          Done
        </button>
        <button onClick={() => changeStatus("Trash")} className="b3">
          Trash
        </button>
        {addlist && (
          <div className="Addlist">
            <b>Add New To Do</b>
            <input
              className="Addinput"
              type="text"
              id="placeholderID"
              placeholder="Your text"
            ></input>
            <button>Add</button>
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
