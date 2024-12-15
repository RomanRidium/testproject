import React from 'react';
import classes from "./startButton.module.css";

const StartButton = ({setResult, setLoading, language, code}) => {

    const runCode = () => {
        setLoading(true);
        if (language === "javascript") {
            setTimeout(() => {
                try {
                    let consoleOutput = [];
                    const originalConsoleLog = console.log;
                    console.log = (...args) => {
                        consoleOutput.push(args.join(" "));
                        originalConsoleLog(...args);
                    };
                    const output = new Function(`"use strict"; ${code}`)();
                    const finalResult = consoleOutput.length > 0
                        ? consoleOutput.join("\n")
                        : output !== undefined
                            ? output
                            : "Код выполнен успешно.";
                    setResult(finalResult);
                    console.log = originalConsoleLog;
                } catch (error) {
                    setResult(`Ошибка: ${error.message}`);
                } finally {
                    setLoading(false);
                }
            }, 2000);
        } else {
            setTimeout(() => {
                const fakeResponse = `Результат выполнения: ${code.length} символов написано на ${language}`;
                setResult(fakeResponse);
                setLoading(false);
            }, 2000);
        }
    };

    return (
        <button onClick={runCode} className={classes.startButton}>
            Run
        </button>
    );
};

export default StartButton;