import React from "react";

const Service = (props) => {
    const { service } = props;
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="service-item shadow-sm p-4 rounded bg-white text-center">
                <div className="icon my-3 text-danger fs-2">
                    <i className={`fas fa-${service.icon}`}></i>
                </div>
                <h3 className="fs-5 py-2">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
            </div>
        </div>
    );
};

export default Service;
