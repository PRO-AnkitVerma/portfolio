import React from "react";
import Project from "./Project";

const projects = [
    {
        pic: "tictactoe.png",
        title: "TicTacToe",
        githubLink: "https://github.com/PRO-AnkitVerma/TicTacToe",
    },
    {
        pic: "vidyam.jpeg",
        title: "ExamShield (Vidyam)",
        githubLink: "https://github.com/PRO-AnkitVerma/ExamShield",
    },
    {
        pic: "meme.png",
        title: "Meme Generator",
        githubLink: "https://github.com/PRO-AnkitVerma/meme-generator",
    },
    {
        pic: "airbnb.png",
        title: "AirBnB Experience Page Design Clone",
        githubLink: "https://github.com/PRO-AnkitVerma/airbnb-exp-page-clone",
    },
    {
        pic: "android.png",
        title: "NewsApp",
        githubLink: "https://github.com/PRO-AnkitVerma/NewsApp",
    },
];

const PortfolioPage = () => {
    const projectsElement = projects.map((project, idx) => (
        <Project key={idx} project={project} />
    ));
    return (
        <section className="portfolio bg-white mt-5 py-4" id="portfolio">
            <div className="container-lg py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="fw-bold mb-5">Latest Works</h2>
                        </div>
                    </div>
                </div>
                <div className="row">{projectsElement}</div>
            </div>
        </section>
    );
};

export default PortfolioPage;
