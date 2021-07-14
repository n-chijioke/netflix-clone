import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src= "https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Netflix Logo"
            />

            <img
             className="nav__avatar"
             src= "https://www.ecosia.org/images?q=netflix%20avater%20link#id=D3CFC019C315FD36BB1CC8234E5CF8A73BD8AD86"
             alt="avatar"
             />
        </div>
    );
}

export default Nav;
