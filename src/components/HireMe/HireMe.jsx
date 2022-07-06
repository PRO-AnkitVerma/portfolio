import React from "react";

const HireMe = () => {
    return (
        <section className="freelancer-available mt-5 py-2 bg-danger">
            <div className="container-lg py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <p className="text-light fs-5">
                            Do you have any project?
                        </p>
                        <h2 className="fs-1 text-white mb-4">
                            I'm Available For Freelancer Projects
                        </h2>
                        <a href="#contact" className="btn btn-outline-light">
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HireMe;
