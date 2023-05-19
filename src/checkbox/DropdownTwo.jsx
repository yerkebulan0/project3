import { icon3 } from "./icon";
import React from "react";
import "./checkbox.css";

export default function DropdownTwo({handleMoveToDone}) {
  return <div className="DropdownTwo" onClick={handleMoveToDone}>
    <div style={{display:"flex",alignItems:"center",gap:10,paddingLeft:10}}> {icon3}Done</div>
   
  </div>;
}
