import React, { useState, useEffect } from "react";
import { NavLink,useLocation } from "react-router-dom";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const location = useLocation();

    const handleScroll = () => {
        setScrolling(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const isBlogActive = location.pathname.startsWith('/blog');

    return (
        <React.Fragment>
            <BootstrapNavbar
                className={`${scrolling ? "scrolling" : ""}`}
                expand="lg"
                fixed="top"
            >
                <Container>
                    <BootstrapNavbar.Brand href="/">
                        <img src="/images/logo.png" alt="logo" width="140px" height="auto" />
                    </BootstrapNavbar.Brand>
                    <BootstrapNavbar.Toggle className="customToggle" onClick={() => setNavbar(!navbar)} />
                    <BootstrapNavbar.Collapse>
                        <Nav className="ml-auto">
                            <BootstrapNavbar.Toggle className="cross" onClick={() => setNavbar(!navbar)} />
                            <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={() => setNavbar(!navbar)}>
                                <span>Home</span>
                            </NavLink>
                            <NavLink to="/about-us" className="nav-link" activeClassName="active" onClick={() => setNavbar(!navbar)}>
                                <span>About Us</span>
                            </NavLink>
                            <NavLink
                                to="/blog"
                                className={`nav-link ${isBlogActive ? 'active' : ''}`}
                                onClick={() => setNavbar(!navbar)}
                            >
                                <span>Blog</span>
                            </NavLink>
                            <Link to="/login" className={`lap_btn ${window.location.pathname === '/login' ? 'active' : ''}`}>
                            <button
                                className="booking"
                            >
                                <img src="/images/account.svg" alt="account" />
                                <span>
                                    Login
                                </span>
                            </button>
                        </Link> 
                        </Nav>    
                  </BootstrapNavbar.Collapse>
                  <Link to="/login" className={`mbl_btn ${window.location.pathname === '/login' ? 'active' : ''}`}>
                            <button
                                className="booking"
                            >
                                <img src="/images/account.svg" alt="account" />
                                <span>
                                    Login
                                </span>
                            </button>
                        </Link> 
                </Container>
            </BootstrapNavbar>
        </React.Fragment>
    );
};

export default Navbar;
