import React, { useState, useEffect } from 'react'
import './Projects.scss'
import ProjectCards from './ProjectCard/ProjectCards'
import { BASE_URL } from '../../config/apiConfig';
import { getProjects } from '../../services/api'
import BarLoader from 'react-spinners/BarLoader'
import ProjectHeadings from './ProjectHeading/ProjectHeadings';

function Project() {

    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const hrRef = document.getElementById('hrRef')
        hrRef.style.transform = 'translateX(0)'
    }, [])

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

    return (
        <div>
            <main className="projects__main">
                <div className="projects">
                    <ProjectHeadings />
                    <hr id="hrRef" width="30%" />
                    {loading ? <BarLoader /> : <ProjectCards projects={projects} />}
                </div>
            </main>
        </div>
    )
}

export default Project
