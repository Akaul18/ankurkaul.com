import React from 'react'
import './Header.scss'
import { DrawerButton } from '../SideDrawer';
import { Link } from 'react-router-dom'

const Header = ({ drawerToggleHandler, currentURLPath }) => {

    React.useEffect(() => {
        console.log(currentURLPath)
    }, [currentURLPath])
    return (
        <header className="header">
            <nav className="header__navigation">
                <div className="header__menu-icon">
                    <DrawerButton drawerToggleHandler={drawerToggleHandler} />
                </div>
                {/* <div className="header__logo"><Link to="/"><strong>My Logo</strong></Link></div> */}
                <div className="header__logo">
                    <Link to="/">
                        <img src="/assets/images/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="spacer"></div>
                <div className="header__nav-items">
                    <ul>
                        <li><Link to="/" style={currentURLPath === '/' ? styles.active : styles.notActive}><strong>HOME</strong></Link></li>
                        <li><Link to="/skills" style={currentURLPath === '/skills' ? styles.active : styles.notActive}><strong>SKILLS</strong></Link></li>
                        <li><Link to="/projects" style={currentURLPath === '/projects' ? styles.active : styles.notActive}><strong>PROJECTS</strong></Link></li>
                        <li><Link to="/blog" style={currentURLPath === '/blog' ? styles.active : styles.notActive}><strong>BLOG</strong></Link></li>
                        <li><Link to="/contact" style={currentURLPath === '/contact' ? styles.active : styles.notActive}><strong>CONTACT</strong></Link></li>
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