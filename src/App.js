import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
    const [mode, setmode] = useState("dark"); // Whether dark mode is enable or not
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
    };
    const toggleMode = () => {
        if (mode === "light") {
            setmode("dark");
            document.body.classList.add("bg-dark");
            showAlert("Dark mode has been enabled", "info");
        } else {
            setmode("light");
            document.body.classList.remove("bg-dark");
            document.body.classList.add("bg-light");
            showAlert("Light mode has been enabled", "info");
        }
    };
    return (
        <>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className="container my-5">
                <TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
                {/* <About></About> */}
            </div>
        </>
    );
}

export default App;
