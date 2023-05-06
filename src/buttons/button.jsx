import React, { useState } from "react";
import "../buttons/button.css";
import img from "../buttons/Plus.png";
export default function Button() {
    const [addlist,setAddlist] = useState(false)

  return (
    <div className="button">
      <button className="b1">To Do</button>
      <button className="b2">Done</button>
      <button className="b3">Trash</button>
      {addlist&&<div className="Addlist">
        <b>Add New To Do</b>
        <input className="Addinput" type="text" id="placeholderID" placeholder="Your text"></input>
        <button>Add</button>
      </div>}
      <button onClick={()=>setAddlist(!addlist)} className="black">
        <img
          style={{ height: 24, width: 24 }}
          src={img}
          alt="Plus"
          className="plus"
        />
      </button>
    </div>
  );
}
