import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar(props) {
    const [homeActive, sethomeActive] = useState("active");
    const [aboutActive, setaboutActive] = useState("");
    const [contactActive, setcontactActive] = useState("");

    const clearActive = () => {
        sethomeActive("");
        setaboutActive("");
        setcontactActive("");
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow py-3 px-2`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {props.title}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${homeActive}`}
                                to="/"
                                onClick={() => {
                                    clearActive();
                                    sethomeActive("active");
                                }}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${aboutActive}`}
                                to="/about"
                                onClick={() => {
                                    clearActive();
                                    setaboutActive("active");
                                }}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${contactActive}`}
                                to="/"
                                onClick={() => {
                                    clearActive();
                                    setcontactActive("active");
                                }}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch form-check-reverse me-3" style={{ userSelect: "none" }}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className={`form-check-label text-${props.mode === "light" ? "secondary" : "light"} `} htmlFor="flexSwitchCheckDefault">
                            Mode
                        </label>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-1 rounded-5 rounded-end" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success rounded-5 rounded-start" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    title: "Set title here",
};
