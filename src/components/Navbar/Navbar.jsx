import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Portfolio",
            path: "/portfolio",
        },
        {
            title: "Contact",
            path: "/contact",
        },
    ];

    const linkElements = links.map((link, idx) => (
        <li key={idx}>
            <Link
                to={link.path}
                className={
                    "dropdown-item " +
                    (location.pathname === link.path
                        ? "text-danger fw-bold"
                        : "")
                }
            >
                {link.title}
            </Link>
        </li>
    ));

    return (
        <nav className="navbar navbar-light fixed-top bg-light shadow-sm">
            <div className="container-lg">
                <Link className="navbar-brand text-danger fw-bold fs-4" to="/">
                    A.V
                </Link>
                <div className="dropdown">
                    <button
                        className="btn btn-secondary btn-danger px-3"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownMenuButton1"
                    >
                        {linkElements}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
