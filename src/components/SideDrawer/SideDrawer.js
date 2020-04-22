import React from 'react'
import './SideDrawer.scss'
import { Link } from 'react-router-dom'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';

    if (props.showDrawer) {
        drawerClasses = 'side-drawer open-drawer'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}
export default SideDrawer
