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
                    <li><Link to="/"><strong>HOME</strong></Link></li>
                    <li><Link to="/skills"><strong>SKILLS</strong></Link></li>
                    <li><Link to="/projects"><strong>PROJECTS</strong></Link></li>
                    <li><Link to="/blog"><strong>BLOG</strong></Link></li>
                    <li><Link to="/contact"><strong>CONTACT</strong></Link></li>
                </ul>
            </div>
        </nav>
    </header >
)

export default Header