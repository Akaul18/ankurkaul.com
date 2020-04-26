import React, { useState, useEffect } from 'react'
import './Projects.scss'

function Project() {
    const [liState, setLiState] = useState({
        "All": '',
        'React.js': '',
        'Node.js': '',
        "Php": '',
    })

    // useEffect(() => {

    // }, [liState])

    const handleLiClick = e => {
        // console.log(e.target.textContent)
        // setLiState({
        //     ...liState,
        //     [e.target.textContent]: e.target.classList.toggle("background")
        // })
        // if (liState[e.target.textContent] === 'background'){

        // }
    }
    return (
        <div>
            <main className="projects__main">
                <div className="">
                    <div className="project-languages__heading">
                        <ul>
                            <li onClick={handleLiClick}>All</li>
                            <li onClick={handleLiClick}>React.js</li>
                            <li onClick={handleLiClick}>Node.js</li>
                            <li onClick={handleLiClick}>Php</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Project
