import React from "react";
import "../App.css";

export default function About(props) {
    return (
        <>
            <h1 className={`mb-4 bg-${props.mode} text-${props.mode === "light" ? "secondary" : "light"}`}>About us</h1>
            <div className="accordion" id="accordionExample">
                <div className={`accordion-item bg-${props.mode} text-${props.mode === "light" ? "secondary" : "light"} border border-secondary border-bottom-0`}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button accordion-button-${props.mode} collapsed bg-${props.mode} text-${props.mode === "light" ? "secondary" : "light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>About Us</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">Welcome to our text utility website! We are a team of software developers and language enthusiasts who have created this platform to help people improve their writing skills and make their work more efficient. Our mission is to provide simple and effective tools that make working with text easy and enjoyable.</div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${props.mode === "light" ? "secondary" : "light"} border border-secondary border-bottom-0`}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className={`accordion-button accordion-button-${props.mode} collapsed bg-${props.mode} text-${props.mode === "light" ? "secondary" : "light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Our History</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">Our journey began when we realized that many people struggle with writing and editing tasks. We wanted to create a solution that would make these tasks faster and easier, while still providing users with high-quality results. After months of research and development, we launched our text utility website, which quickly gained popularity among writers, students, and professionals.</div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${props.mode === "light" ? "secondary" : "light"} border border-secondary border-bottom-0`}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button accordion-button-${props.mode} collapsed bg-${props.mode} text-${props.mode === "light" ? "secondary" : "light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Our Tools</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">We offer a wide range of text utility tools that can help you with various tasks. Our tools include a word counter, character counter, text case converter, text editor, plagiarism checker, and many more. All of our tools are free to use, and we are constantly working on adding new features and improving the user experience.</div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${props.mode === "light" ? "secondary" : "light"} border border-secondary border-bottom-0`}>
                    <h2 className="accordion-header" id="headingFour">
                        <button className={`accordion-button accordion-button-${props.mode} collapsed bg-${props.mode} text-${props.mode === "light" ? "secondary" : "light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <strong>Our Community</strong>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">We believe that learning and growth happen best in a supportive community. That's why we have created a platform where people can connect with each other, share their work, and receive feedback. Our community is open to anyone who is interested in improving their writing skills, regardless of their level of experience.</div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${props.mode === "light" ? "secondary" : "light"} border border-secondary`}>
                    <h2 className="accordion-header" id="headingFive">
                        <button className={`accordion-button accordion-button-${props.mode} collapsed bg-${props.mode} text-${props.mode === "light" ? "secondary" : "light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <strong>Our Future</strong>
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">We are committed to continuously improving our platform and expanding our range of tools and services. Our goal is to become the go-to platform for anyone who needs help with writing and editing tasks. We are also exploring new ways to engage our community and provide more value to our users. Thank you for being a part of our journey!</div>
                    </div>
                </div>
            </div>
        </>
    );
}
