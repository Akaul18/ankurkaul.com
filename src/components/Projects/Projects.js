import React, { useState, useEffect } from 'react'
import './Projects.scss'
import ProjectCards from './ProjectCard/ProjectCards'
import { BASE_URL } from '../../config/apiConfig';
import { getProjects } from '../../services/api'
import BarLoader from 'react-spinners/BarLoader'

function Project() {

    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setLoading(true)
        getProjects(BASE_URL)
            .then(res => {
                setProjects(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message)
                setLoading(false)
            })
    }, [])

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
                    {loading ? <BarLoader /> : <ProjectCards projects={projects} />}
                </div>
            </main>
        </div>
    )
}

export default Project
