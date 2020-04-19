import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <div>Burger Icon</div>
            <div className="header__logo"><Link to="/">Logo</Link></div>
            <div className="header__nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Header