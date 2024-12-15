import React from "react";
import classes from "./header.module.css";
import Dropdown from "../dropdown/dropdown";
import StartButton from "../startButton/startButton";

const Header = ({ onLanguageChange, setResult, setLoading, language, code }) => {
    return (
        <div className={classes.headerContainer}>
            <div>
                <StartButton setResult={setResult} setLoading={setLoading} language={language} code={code} />
                <Dropdown
                    variable={["Go", "Python", "JavaScript"]}
                    onSelect={onLanguageChange}
                />
            </div>
        </div>
    );
};

export default Header;
