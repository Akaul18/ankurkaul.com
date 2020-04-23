import React from 'react'
import './Header.scss'
import { DrawerButton } from '../SideDrawer';
import { Link } from 'react-router-dom'

const Header = ({ drawerToggleHandler }) => (
    <header className="header">
        <nav className="header__navigation">
            <div className="header__menu-icon">
                <DrawerButton drawerToggleHandler={drawerToggleHandler} />
            </div>
            <div className="header__logo"><Link to="/"><strong>My Logo</strong></Link></div>
            <div className="spacer"></div>
            <div className="header__nav-items">
                <ul>
                    <li><Link to="/"><strong>Home</strong></Link></li>
                    <li><Link to="/skills"><strong>Skills</strong></Link></li>
                    <li><Link to="/projects"><strong>Projects</strong></Link></li>
                    <li><Link to="/contact"><strong>Contact</strong></Link></li>
                </ul>
            </div>
        </nav>
    </header >
)

export default Header