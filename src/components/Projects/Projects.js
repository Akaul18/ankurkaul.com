import React, { useState, useEffect } from 'react'
import './Projects.scss'
import instock from '../../assets/images/instock.png';
import instockMobile from '../../assets/images/instock-mobile.png';

function Project() {

    const [width, setWidth] = useState(0)
    useEffect(() => {
        window.addEventListener('resize', handleWidth)
        return () => {
            window.removeEventListener('resize', handleWidth)
        }
    }, [])

    const handleWidth = e => {
        setWidth(e.target.innerWidth)
    }
    // const [liState, setLiState] = useState({
    //     "All": '',
    //     'React.js': '',
    //     'Node.js': '',
    //     "Php": '',
    // })

    const handleLiClick = e => {
    }
    return (
        <div>
            <main className="projects__main">
                <div className="projects">
                    <div className="project__language-headings">
                        <ul>
                            <li onClick={handleLiClick}><strong>All</strong></li>
                            <li onClick={handleLiClick}><strong>React.js</strong></li>
                            <li onClick={handleLiClick}><strong>Node.js</strong></li>
                            <li onClick={handleLiClick}><strong>Php</strong></li>
                        </ul>
                    </div>
                    <div className="project-cards">
                        <div className="project-cards__image-holder">
                            {width >= '720' ?
                                <img src={instock} alt="instock project" />
                                : <img src={instockMobile} alt="instock project" />}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Project
