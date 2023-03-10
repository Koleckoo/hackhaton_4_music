import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Music App
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Artists">
                                Artists
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/instruments">
                                Instruments
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/genres">
                                Genres
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
