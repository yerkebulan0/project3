import dot from "./dots.png";
import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";
import "./checkbox.css";
import React from "react";

export const Checkbox = (props) => {
  const { item, onCheckboxToggle, deleteForever,handleMoveBackToTodo } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const [check, setCheck] = useState(false);
  const dropdownContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showDropdown &&
        !dropdownContainerRef.current?.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showDropdown]);

  const onMoveBackToTodo = () => {
    setCheck(!check);
    handleMoveBackToTodo();
    setShowDropdown(false);
  };
  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const backGr = {
    background: "#E4E6E7",
  };

  return (
    <div
      className="checkboxIter"
      style={{ padding: "0px", ...(check && backGr) }}
      ref={dropdownContainerRef}
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
        <p
          style={
            item.isClicked
              ? { textDecoration: "line-through", color: "#959595" }
              : { textDecoration: "none", color: "black" }
          }
          className="CheckboxText"
        >
          {item.name}
        </p>
      </div>
      {showDropdown && (
        <Dropdown
          deleteForever={deleteForever}
          onMoveBackToTodo={onMoveBackToTodo}
          closeDropdown={closeDropdown}
        />
      )}
    </div>
  );
};
