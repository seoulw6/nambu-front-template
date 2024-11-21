
import React, { useState } from 'react';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className={`custom-navbar ${isMenuOpen ? "menu-open" : ""}`}
            data-spy="affix"
            data-offset-top="20"
        >
            <div className="container">
                <a className="logo" href="#">
                    Young Fit!
                </a>
                <ul className={`nav ${isMenuOpen ? "show" : ""}`}>

                    <li className="item">
                        <a className="link" href="learning.html">
                            Sentence Reading
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="mypage.html">
                            My Package
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="testing.html">
                            Level Test
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="blogging.html">
                            Blog
                        </a>
                    </li>
                    <li className="item">
                        <a className="link" href="#contact">
                            Contact
                        </a>
                    </li>
                    <li className="item ml-md-3">
                        <a href="join.html" className="btn btn-primary">
                            Sign In
                        </a>
                    </li>
                </ul>
                <button
                    id="nav-toggle"
                    className={`hamburger hamburger--elastic ${isMenuOpen ? "is-active" : ""
                        }`}
                    onClick={toggleMenu}
                >
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </button>
            </div>
        </nav>
    )
}
export default Nav;



