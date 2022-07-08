import React from "react";

const Project = (props) => {
    const { project } = props;
    return (
        <div className="col-md-6 col-lg-4">
            <div className="portfolio-item">
                <img
                    src={`assets/img/portfolio/${project.pic}`}
                    className="w-100 img-thumbnail"
                    alt="portfolio item"
                    style={{
                        objectFit: "none",
                        objectPosition: "center",
                        height: "200px",
                    }}
                />
                <h3 className="text-capitalize fs-5 my-2">{project.title}</h3>
                <p className="mb-4">
                    <a
                        href={project.githubLink}
                        className="text-danger text-decoration-none"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        GitHub Link
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Project;
