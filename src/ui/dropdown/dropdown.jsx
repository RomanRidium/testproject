import React, { useState } from "react";
import classes from "./dropdown.module.css";

const Dropdown = ({ variable, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(variable[0]);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <div className={classes.dropdownContainer}>
            <button style={{
                backgroundColor: "transparent",
                border: 'none',
                color: "white",
                cursor: "pointer"
            }}
                    onClick={toggleDropdown}
            >
                {selectedOption}
            </button>
            {isOpen && (
                <ul className={classes.dropdownList}>
                    {variable.map((option) => (
                        <li
                            key={option}
                            className={classes.dropdownListElement}
                            style={{ padding: "5px 10px", cursor: "pointer" }}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
