import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";

function App() {
    const [mode, setmode] = useState("dark"); // Whether dark mode is enable or not
    const toggleMode = () => {
        if (mode === "light") {
            setmode("dark");
            document.body.classList.add("bg-dark");
        } else {
            setmode("light");
            document.body.classList.remove("bg-dark");
            document.body.classList.add("bg-light");
        }
    };
    return (
        <>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <div className="container my-5">
                <TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>
                {/* <About></About> */}
            </div>
        </>
    );
}

export default App;
