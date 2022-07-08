import React from "react";
import Service from "./Service";

const services = [
    {
        icon: "code",
        title: "Web Development",
        description: "React ● NodeJs ● AngularJs ● Python ● CSS/JS",
    },
    {
        icon: "lightbulb",
        title: "Creative Design",
        description:
            "Brainstorming Ideas & Designing Efficient Solutions ● Workflows ● ",
    },
    {
        icon: "mobile",
        title: "Mobile",
        description: "Android ● Flutter ● Firebase ● Java ● Kotlin",
    },
];

const servicesElement = services.map((service, idx) => (
    <Service service={service} key={idx} />
));

const Services = () => {
    return (
        <section className="services py-5" id="services">
            <div className="container-lg py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="fw-bold mb-5">What I Do</h2>
                        </div>
                    </div>
                </div>
                <div className="row">{servicesElement}</div>
            </div>
        </section>
    );
};

export default Services;
