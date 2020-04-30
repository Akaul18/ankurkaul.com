import React, { useEffect } from 'react'
import './ProjectHeadings.scss'

function ProjectHeadings() {

    useEffect(() => {
        const headingRef = document.getElementById('headingRef')
        headingRef.style.transform = 'translateY(0)'
    }, [])

    const handleLiClick = e => {
    }
    return (
        <div id="headingRef" className="project__language-headings">
            <ul>
                <li onClick={handleLiClick}><strong>All</strong></li>
                <li onClick={handleLiClick}><strong>React.js</strong></li>
                <li onClick={handleLiClick}><strong>Node.js</strong></li>
                <li onClick={handleLiClick}><strong>Php</strong></li>
            </ul>
        </div>
    )
}

export default ProjectHeadings
