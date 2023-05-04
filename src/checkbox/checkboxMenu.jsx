import { useState } from "react";
import "./checkbox.css";
import dot from "./dots.png";
import { icon2, trash } from "./icon";
import Modal from "./modalWindow";
export default function CheckboxMenu() {
  const [show, setShow] = useState(false);
  const [modalActive, setModalactive] = useState(false)
  const todos = [
    { name: "Write Essay" },
    { name: "One Hour CSS Course Online" },
    { name: "Buy One Way Tickets to San Fransico" },
    { name: "Go to Gym" },
    { name: "Buy Groceries" },
  ];
  return (
    <div>
      {todos.map((item, index) => (
        <div className="checkboxIter">
          <img
            onClick={() => setModalactive(!modalActive)}
            style={{ height: 10, width: 2.5 }}
            src={dot}
            alt="Plus"
            className="dot"
            
          />
          
           {/* {show && (
        <div className="show">
          <div className="firstShow"> {trash} clicked </div>
          <div className="secondShow">{icon2} clicked </div>
        </div>
      )} */}

          <input className="CheckboxInput" type="Checkbox"></input>
          <p className="CheckboxText">{item.name}</p>
        </div>
      ))}
      {modalActive &&  <Modal active={modalActive} setActive={setModalactive}/>}
      
     
     
    </div>
  );
}
