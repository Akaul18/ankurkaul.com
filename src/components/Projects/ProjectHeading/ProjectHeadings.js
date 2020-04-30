import React, { useState, useEffect } from 'react'
import './ProjectHeadings.scss'

function ProjectHeadings() {

    const [state, setState] = useState({
        "All": true,
        "React.js": false,
        "Node.js": false,
        "Php": false,
    })

    useEffect(() => {
        console.log(state)
        const headingRef = document.getElementById('headingRef')
        headingRef.style.transform = 'translateY(0)'
    }, [state])

    const handleLiClick = e => {
        // if (!state[e.target.textContent]) {
        //     setState({ ...state, [e.target.textContent]: true })
        //     e.target.style.background = "red"
        // } else {
        //     // setState({ ...state, [e.target.textContent]: false })
        //     // e.target.style.background = "initial"
        // }
    }
    return (
        <div id="headingRef" className="project__language-headings">
            <ul>
                <li onClick={handleLiClick}>All</li>
                <li onClick={handleLiClick}>React.js</li>
                <li onClick={handleLiClick}>Node.js</li>
                <li onClick={handleLiClick}>Php</li>
            </ul>
        </div>
    )
}

export default ProjectHeadings
