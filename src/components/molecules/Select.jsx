"use client";
import React, { useEffect, useState } from "react";
// import styles from "./styles/Select.module.css";

const Select = ({ options }) => {
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    localStorage.setItem("range", inputValue);
  }, [inputValue]);

  const handleSelectChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative">
      <select
        value={inputValue}
        onChange={handleSelectChange}
        className="border border-gray-400 p-2 rounded pl-4 w-full text-sm"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
