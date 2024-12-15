import React, {useState} from "react";
import "./main.css";
import Header from "../../ui/header/header";
import {Editor} from "@monaco-editor/react";
import ReactLoading from "react-loading";

const Main = () => {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState('');
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage.toLowerCase());
    };

    return (
        <>
            <Header setResult={setResult} setLoading={setLoading} language={language} code={code} onLanguageChange={handleLanguageChange}/>
            {
                loading ? (
                        <ReactLoading className='mainLoading' type="bubbles" color="#3498db" height={100} width={100}/>
                    ) :
                    (
                        <></>
                    )
            }
            <div className="main">
                <div className="mainEditorContainer">
                    <Editor
                        height="100%"
                        width="100%"
                        language={language}
                        value={code}
                        theme="vs-light"
                        onChange={(value) => setCode(value)}
                    />
                </div>
            </div>
            <div className="mainOutputContainer">
                <h3>Output:</h3>
                <pre style={{overflow: "hidden"}}>{result}</pre>
            </div>
        </>
    );
};

export default Main;
