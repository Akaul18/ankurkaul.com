import React, { useState, useEffect } from 'react'
import './ProjectCards.scss'
import Button from '@material-ui/core/Button'

const ProjectCards = ({ projects }) => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        // const imgCards = 
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleWidth)
        return () => {
            window.removeEventListener('resize', handleWidth)
        }
    }, [])

    const handleWidth = e => {
        setWidth(e.target.innerWidth)
    }
    return (
        <div className="project-cards" >
            <div className="project-cards__holder">
                {projects.map(project =>
                    <div id={`img-${project.id}`} key={project.id} className="project-cards__image-holder">
                        {width >= '720' ?
                            <img src={`/assets/images/${project.imgTitleDesktop}`} alt={project.title} />
                            : <img src={`/assets/images/${project.imgTitleDesktop}`} alt={project.title} />
                        }
                        <div className="project-cards__proj-details">
                            <div className="proj-details__title">{project.title}</div>
                            {/* <div className="proj-details__desc">{project.desc}</div> */}
                            <div className="proj-details__call-to-action">
                                <Button className="call-to-action-buttons" variant="outlined" size="small" color="primary">
                                    <strong>
                                        <a href={project.github} taget="_blank">
                                            View Github</a>
                                    </strong>
                                </Button>
                                <Button className="call-to-action-buttons" variant="outlined" size="small" color="secondary">
                                    <strong>
                                        <a href={project.website} taget="_blank">Open Web App</a>
                                    </strong>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectCards
