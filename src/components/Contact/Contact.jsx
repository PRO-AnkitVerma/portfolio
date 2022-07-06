import React, { useState } from "react";

const contact = {
    email: "ankitverma209171@gmail.com",
    phone: "+91 932 711 4805",
    address: "51 Pramukh Swami Nagar - 5, TP - 13, Vadodara - 390024",
};

const Contact = () => {
    const [message, setMessage] = useState({
        name: "",
        subject: "",
        body: "",
    });

    // console.log(message);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setMessage((oldMessage) => ({
            ...oldMessage,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // here su means subject line
        window.open(
            `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${contact.email}&su=${message.subject}&body=${message.body}`
        );
    };

    return (
        <section className="contact bg-white py-5" id="contact">
            <div className="container-lg py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="fw-bold mb-5">Contact Me</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="contact-item d-flex mb-3">
                            <div className="icon fs-4 text-danger">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="text ms-3">
                                <h3 className="fs-5">Email</h3>
                                <p className="text-muted">{contact.email}</p>
                            </div>
                        </div>
                        <div className="contact-item d-flex mb-3">
                            <div className="icon fs-4 text-danger">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="text ms-3">
                                <h3 className="fs-5">Phone</h3>
                                <p className="text-muted">{contact.phone}</p>
                            </div>
                        </div>
                        <div className="contact-item d-flex">
                            <div className="icon fs-4 text-danger">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="text ms-3">
                                <h3 className="fs-5">Visit Office</h3>
                                <p className="text-muted">{contact.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 bg-light p-4">
                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <input
                                            name="name"
                                            value={message.name}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Your Name"
                                            className="form-control form-control-lg fs-6 border-0 shadow-sm"
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Your Email"
                                            className="form-control form-control-lg fs-6 border-0 shadow-sm"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mb-4">
                                        <input
                                            name="subject"
                                            value={message.subject}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Subject"
                                            className="form-control form-control-lg fs-6 border-0 shadow-sm"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mb-4">
                                        <textarea
                                            name="body"
                                            value={message.body}
                                            onChange={handleChange}
                                            placeholder="Your Message"
                                            rows="5"
                                            className="form-control form-control-lg fs-6 border-0 shadow-sm"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mb-4">
                                        <button
                                            type="submit"
                                            className="btn btn-danger px-3"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
