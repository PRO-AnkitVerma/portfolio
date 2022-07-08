import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="home py-5" id="home">
            <div className="container-lg">
                <div className="row min-vh-100 align-items-center align-content-center">
                    <div className="col-md-6 mt-5 mt-md-0">
                        <div className="home-img text-center">
                            <img
                                src="assets/img/profile.jpg"
                                height="373px"
                                className="rounded-circle mw-100"
                                alt="profile"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0 order-md-first">
                        <div className="home-text">
                            <p className="text-muted mb-1">Hello I'm</p>
                            <h1 className="text-danger text-uppercase fs-1 fw-bold">
                                Ankit Verma
                            </h1>
                            <h2 className="fs-4">Android and Web Developer</h2>
                            <p className="mt-4 text-muted">
                                Love to transform ideas into full-fledged
                                solutions. <br />
                                Checkout my latest works here
                            </p>
                            <Link
                                to="/portfolio"
                                className="btn btn-danger px-3 mt-3"
                            >
                                My Work
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
