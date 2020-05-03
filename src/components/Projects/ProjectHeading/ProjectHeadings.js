import React, { useEffect } from 'react'
import './ProjectHeadings.scss'

const ProjectHeadings = ({ projChange }) => {

    useEffect(() => {
        const headingRef = document.getElementById('headingRef')
        headingRef.style.transform = 'translateY(0)'
    }, [])

    const handleLiClick = e => {
        const ul = [...[e.target.parentNode.childNodes]]
        ul[0].forEach(li => {
            // console.log(li)
            li.classList.remove('background');
            li.classList.add('background-negate')
        })
        e.target.classList.remove('background-negate')
        e.target.classList.add('background')

        projChange(e.target.textContent)
    }
    return (
        <div id="headingRef" className="project__language-headings">
            <ul>
                <li className="back background" onClick={handleLiClick}>All</li>
                <li className="back" onClick={handleLiClick}>React.js</li>
                <li className="back" onClick={handleLiClick}>Node.js</li>
                <li className="back" onClick={handleLiClick}>PHP</li>
            </ul>
        </div>
    )
}

export default ProjectHeadings
