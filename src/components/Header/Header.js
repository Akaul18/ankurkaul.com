import React from 'react'
import './Header.scss'
import { DrawerButton } from '../SideDrawer';
import { Link } from 'react-router-dom'

const Header = () => (
    <header className="header">
        <nav className="header__navigation">
            <div className="header__menu-icon">
                <DrawerButton />
            </div>
            <div className="header__logo"><Link to="/"><strong>My Logo</strong></Link></div>
            <div className="spacer"></div>
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