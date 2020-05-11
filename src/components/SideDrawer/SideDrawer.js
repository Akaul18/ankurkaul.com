import React from 'react'
import './SideDrawer.scss'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'

const SideDrawer = ({ showDrawer, closeDrawer }) => {
    let drawerClasses = 'side-drawer';

    if (showDrawer) {
        drawerClasses = 'side-drawer open-drawer'
    }

    return (
        <nav className={drawerClasses}>
            <div className="cross-button" onClick={closeDrawer}>
                <div className="cross-button__line"></div>
                <div className="cross-button__line"></div>
                <div className="cross-button__line"></div>
            </div>
            {/* <hr width="80%" /> */}
            <ul>
                {/* <li onClick={closeDrawer}><Link to="/"><strong>HOME</strong></Link></li>
                <li onClick={closeDrawer}><Link to="/skills"><strong>SKILLS</strong></Link></li>
                <li onClick={closeDrawer}><Link to="/projects"><strong>PROJECTS</strong></Link></li>
                <li onClick={closeDrawer}><Link to="/blog"><strong>BLOG</strong></Link></li>
                <li onClick={closeDrawer}><Link to="/contact"><strong>CONTACT</strong></Link></li> */}
                <li><Link onClick={closeDrawer} to="Home" spy={true} smooth={true} offset={-50} duration={500} delay={100}><strong>HOME</strong></Link></li>
                <li><Link to="Skills" onClick={closeDrawer} spy={true} smooth={true} offset={-50} duration={500} delay={100}><strong>SKILLS</strong></Link></li>
                <li><Link to="Projects" onClick={closeDrawer} spy={true} smooth={true} offset={-75} duration={500} delay={100}><strong>PROJECTS</strong></Link></li>
                {/* <li><Link to="/blog" onClick={closeDrawer} spy={true} smooth={true} offset={-50} duration={500} delay={100}><strong>BLOG</strong></Link></li> */}
                <li><Link to="Contact" onClick={closeDrawer} spy={true} smooth={true} offset={350} duration={500} delay={100}><strong>CONTACT</strong></Link></li>
            </ul>
        </nav>
    );
}
export default SideDrawer
