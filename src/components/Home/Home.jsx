import React from "react";

const Home = () => {
    return (
        <section className="home py-5" id="home">
            <div className="container-lg">
                <div className="row min-vh-100 align-items-center align-content-center">
                    <div className="col-md-6 mt-5 mt-md-0">
                        <div className="home-img text-center">
                            <img
                                src="assets/img/profile.png"
                                className="rounded-circle mw-100"
                                alt="profile image"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0 order-md-first">
                        <div className="home-text">
                            <p className="text-muted mb-1">Hello I'm</p>
                            <h1 className="text-danger text-uppercase fs-1 fw-bold">
                                Web Developer
                            </h1>
                            <h2 className="fs-4">Ankit Verma</h2>
                            <p className="mt-4 text-muted">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Explicabo sapiente nemo
                                aperiam corporis impedit nisi maiores culpa
                                tempora dicta hic.
                            </p>
                            <a
                                href="#portfolio"
                                className="btn btn-danger px-3 mt-3"
                            >
                                My Work
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
