import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [copyBtnText, setCopyBtnText] = useState("Copy Text");

    const handleUpClick = () => {
        let newText = text.toUpperCase().trim();
        setText(newText);
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase().trim();
        setText(newText);
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        setCopyBtnText("Copied!");
        document.getElementById("mybox").select();
        setTimeout(() => {
            setCopyBtnText("Copy Text");
        }, 1000);
    };

    const handleClearClick = () => {
        setText("");
    };

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    return (
        <>
            <div className={`container bg-${props.mode} text-${props.mode==="light"?"secondary":"light"}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode==="light"?"secondary":"light"}`} id="mybox" rows="15" value={text} onChange={handleOnChange}></textarea>
                </div>
                <div className="my-2">
                    <button className="btn btn-info me-2" onClick={handleUpClick}>
                        Convert to Uppercase
                    </button>
                    <button className="btn btn-info me-2" onClick={handleLoClick}>
                        Convert to Lowercase
                    </button>
                    <button className="btn btn-info me-2" onClick={handleCopyClick}>
                        {copyBtnText}
                    </button>
                    <button className="btn btn-outline-danger me-2" onClick={handleClearClick}>
                        Clear Text
                    </button>
                </div>
            </div>
            <div className={`container my-3 bg-${props.mode} text-${props.mode==="light"?"secondary":"light"}`}>
                <h2>Your text summary</h2>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p className="text-wrap text-break">{text.length>0?text:"Enter something to preview it here"}</p>
            </div>
        </>
    );
}
