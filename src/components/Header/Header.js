import React from 'react'
import './Header.scss'
import { DrawerButton } from '../SideDrawer';
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'

// const Header = ({ drawerToggleHandler, currentURLPath }) => {
const Header = ({ drawerToggleHandler }) => {

    return (
        <header className="header">
            <nav className="header__navigation">
                <div className="header__menu-icon">
                    <DrawerButton drawerToggleHandler={drawerToggleHandler} />
                </div>
                {/* <div className="header__logo"><Link to="/"><strong>My Logo</strong></Link></div> */}
                <div className="header__logo">
                    {/* <Link to="/"> */}
                    <Link to="Home" spy={true} smooth={true} offset={-50} duration={500} delay={100}>
                        <img src="/assets/images/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="spacer"></div>
                <div className="header__nav-items">
                    <ul>
                        <li><Link to="Home" spy={true} smooth={true} offset={-50} duration={700} delay={100}><strong>HOME</strong></Link></li>
                        <li><Link to="Skills" spy={true} smooth={true} offset={-50} duration={700} delay={100} ><strong>SKILLS</strong></Link></li>
                        <li><Link to="Projects" spy={true} smooth={true} offset={-75} duration={700} delay={100} ><strong>PROJECTS</strong></Link></li>
                        {/* <li><Link to="/blog" ><strong>BLOG</strong></Link></li> */}
                        <li><Link to="Contact" spy={true} smooth={true} offset={50} duration={700} delay={100} ><strong>CONTACT</strong></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

const styles = {
    active: {
        color: '#f50057'
    },
    notActive: {
        color: '#fff'
    }
}

export default Header