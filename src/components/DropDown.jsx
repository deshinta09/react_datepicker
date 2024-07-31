// src/components/DropDownCheckbox.js
import React, { useState } from "react";

const DropDown = ({ options, selectedOptions, setSelectedOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="rounded-full text-black font-bold p-2 outline-none ring-2 ring-[#D2AD83] w-64"
          id="options-menu"
          onClick={toggleDropdown}
        >
          Select Options : {selectedOptions.join(", ")}
        </button>
      </div>

      {isOpen && (
        <div className="py-1">
          {options.map((option) => (
            <div key={option} className="flex items-center px-4 py-2">
              <input
                id={`checkbox-${option}`}
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <label
                htmlFor={`checkbox-${option}`}
                className="ml-2 block text-sm text-gray-700"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
