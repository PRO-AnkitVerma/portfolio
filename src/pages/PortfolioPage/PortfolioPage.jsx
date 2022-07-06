import React from "react";
import Project from "./Project";

const projects = [
    {
        pic: "1.jpg",
        title: "Team work",
        githubLink: "https:www.github.com",
    },
    {
        pic: "2.jpg",
        title: "Team work",
        githubLink: "https:www.github.com",
    },
    {
        pic: "3.jpg",
        title: "Team work",
        githubLink: "https:www.github.com",
    },
    {
        pic: "4.jpg",
        title: "Team work",
        githubLink: "https:www.github.com",
    },
    {
        pic: "5.jpg",
        title: "Team work",
        githubLink: "https:www.github.com",
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
