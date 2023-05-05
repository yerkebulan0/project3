import dot from "./dots.png";
import Dropdown from "./Dropdown";
import { useState } from "react";
import './checkbox.css'

export const Checkbox = (props) => {
  const {item} = props;

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="checkboxIter" style={{padding: '0 50px'}}>
      <img
        style={{ height: 10, width: 2.5, }}
        src={dot}
        alt="Plus"
        className="dot"
        onClick={() => setShowDropdown(!showDropdown)}
      />
      <input className="CheckboxInput" type="Checkbox"></input>
      <p className="CheckboxText">{item.name}</p>
      {showDropdown && <Dropdown />}
    </div>
  );
};