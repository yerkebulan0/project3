import dot from "./dots.png";
import Dropdown from "./Dropdown";
import { useState } from "react";
import "./checkbox.css";
import React from "react";

export const Checkbox = (props) => {
  const { item } = props;

  const [showDropdown, setShowDropdown] = useState(false);
  const [check, setCheck] = useState(false);
  if (check) {
    console.log(item.name);
  }
  const Line = {
    textDecoration: "line-through",
    
    color: "#959595",
  };
  const backGr ={
    background: "#E4E6E7",
  }

  return (
    <div className="checkboxIter" style={{ padding: "0px",...(check && backGr)  }}>
      <div className="DDot" onClick={() => setShowDropdown(!showDropdown)}>
        <img
          style={{ height: 10, width: 2.5 }}
          src={dot}
          alt="Plus"
          className="dot"
        />
      </div>{" "}
      <div style={{gap:16,display:"flex"}}>
        <input
          onChange={() => setCheck(!check)}
          className="CheckboxInput"
          type="Checkbox"
        ></input>
        <p style={{ ...(check && Line) }} className="CheckboxText">
          {item.name}
        </p>
      </div>
      {showDropdown && <Dropdown />}
    </div>
  );
};
