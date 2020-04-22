import React from 'react'
import './SideDrawer.scss'
import { Link } from 'react-router-dom'

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
            <ul>
                <li onClick={closeDrawer}><Link to="/">Home</Link></li>
                <li onClick={closeDrawer}><Link to="/about">About Me</Link></li>
                <li onClick={closeDrawer}><Link to="/projects">Projects</Link></li>
                <li onClick={closeDrawer}><Link to="/skills">Skills</Link></li>
                <li onClick={closeDrawer}><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}
export default SideDrawer
