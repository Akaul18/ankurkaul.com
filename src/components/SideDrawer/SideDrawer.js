import React from 'react'
import './SideDrawer.scss'
import { Link } from 'react-router-dom'

const SideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
);

export default SideDrawer
