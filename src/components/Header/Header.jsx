import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="custom-header py-3 bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    {/* Logo */}
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <span className="text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px', fontWeight: '500', margin: '10px', backgroundColor: '#9D00FF', fontSize: '20px'}}>S</span>
                        <span className="fw-bold" style={{ fontSize: "20px" }}>Seyidzade</span>
                    </a>

                    {/* Burger menu */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar links */}
                    <div className="collapse navbar-collapse" id="mainNav">
                        <ul className="navbar-nav ms-auto px-5">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#process">Process</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn custom-outline-btn ms-lg-2 mt-2 mt-lg-0" href="#contact" style={{ borderRadius: '5px'}}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
