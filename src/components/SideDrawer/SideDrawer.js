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
            {/* <hr width="80%" /> */}
            <ul>
                <li onClick={closeDrawer}><Link to="/"><strong>Home</strong></Link></li>
                <li onClick={closeDrawer}><Link to="/skills"><strong>Skills</strong></Link></li>
                <li onClick={closeDrawer}><Link to="/projects"><strong>Projects</strong></Link></li>
                <li onClick={closeDrawer}><Link to="/contact"><strong>Contact</strong></Link></li>
            </ul>
        </nav>
    );
}
export default SideDrawer
