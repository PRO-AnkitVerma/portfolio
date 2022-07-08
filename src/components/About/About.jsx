import React from "react";
import Progressbar from "./Progressbar";

const skills = [
    {
        name: "Html/Css",
        ratings: 8.5,
    },
    {
        name: "Bootstrap",
        ratings: 8.0,
    },
    {
        name: "React (Javascript)",
        ratings: 8,
    },
    {
        name: "Django (Python)",
        ratings: 7.5,
    },
    {
        name: "Android (Java)",
        ratings: 7,
    },
];

const About = () => {
    const skillsElement = skills.map((skill, idx) => (
        <div className="skill-item mb-4" key={idx}>
            <h3 className="fs-6">{skill.name}</h3>
            <Progressbar height={5} width={skill.ratings * 10} />
        </div>
    ));

    return (
        <section className="about bg-white py-5" id="about">
            <div className="container-lg py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="fw-bold mb-5">About Me</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-text">
                            <h3 className="fs-4 mb-3">Myself, </h3>
                            <p className="text-muted">
                                an IT undergrad who is curious about learning
                                and exploring new technologies. Trying out and
                                building stuffs such as web apps and mobile apps
                                with latest technolgies - such as React, NodeJs,
                                Django, Kotlin, Firebase etc. <br />
                                Checkout my resume to learn more about me.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 d-flex align-items-center">
                                <a
                                    href="https://docs.google.com/document/d/1Txqx9LVJM1v9Gwylns4WhLdLlxWWyYnLPDLStSouyJE/edit?usp=sharing"
                                    className="btn px-3 btn-danger me-5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download CV
                                </a>
                                <div className="social-links">
                                    <a
                                        href="https://github.com/PRO-AnkitVerma"
                                        className="text-dark me-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/ankit-verma-209171/"
                                        className="text-dark me-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0">{skillsElement}</div>
                </div>
            </div>
        </section>
    );
};

export default About;
