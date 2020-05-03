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
    const [handleProjectChange, setHandleProjectChange] = useState('all')

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

    const handleProjChange = (input) => {
        if (input.toLowerCase() === 'react.js') {
            setHandleProjectChange('react')
        }
        else if (input.toLowerCase() === 'node.js') {
            setHandleProjectChange('node')
        }
        else if (input.toLowerCase() === 'php') {
            setHandleProjectChange('php')
        }
        else {
            setHandleProjectChange('all')
        }
    }

    return (
        <div>
            <main className="projects__main">
                <div className="projects">
                    <ProjectHeadings projChange={handleProjChange} />
                    <hr id="hrRef" width="30%" />
                    {loading ? <BarLoader /> : <ProjectCards projects={projects} type={handleProjectChange} />}
                </div>
            </main>
        </div>
    )
}

export default Project
