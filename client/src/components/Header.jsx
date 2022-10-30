import React from "react";
import "../css/header.css";
// @ts-ignore
import logo from "../img/logo.png";

export default function Header() {
	return (
		<header className="main_menu home_menu menu_fixed">

        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12" data-aos="fade-down" data-aos-duration="1300">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a href="/" className="navbar-brand">
                            <img src={logo} alt="logo"/>
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item justify-content-center"
                            id="navbarTogglerDemo02">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/" id="home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/doctors">Doctors</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/bookappointment">Appointment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/faq">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contactus">Contact</a>
                                </li>
                                <li>
                                    <a className="btn_2 d-lg-block ms-auto mt-3 mx-2" id="login-register-btn"
                                        href="/login">Login/Register</a>
                                </li>
                                <li>
                                    <a className="btn_2 d-lg-block ms-auto mt-3" id="logout-btn" href="/login">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>

	);
}
