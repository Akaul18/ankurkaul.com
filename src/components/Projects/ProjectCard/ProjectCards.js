import React, { useState, useEffect } from 'react'
import './ProjectCards.scss'
import Button from '@material-ui/core/Button'

const ProjectCards = ({ projects, type }) => {

    const [filterProjects, setFilterProjects] = useState([])

    useEffect(() => {
        setFilterProjects(projects.filter(project =>
            project.keyword.includes(type)
        ))
    }, [projects, type])

    return (
        <div className="project-cards">
            {filterProjects.map(project =>
                <div id={`holder-${project.id}`} key={project.id} className="project-cards__holder">
                    <div className="project-cards__image-holder">
                        <img
                            src={`/assets/images/${project.imgTitleDesktop}`}
                            alt={`${project.imgTitleDesktop} logo`}
                        />
                    </div>
                    <div className="project-cards__proj-details">
                        <div className="proj-details__title">{project.title}</div>
                        <div className="proj-details__desc">{project.shortDesc}</div>
                        <div className="proj-details__call-to-action">
                            <Button className="call-to-action-buttons" variant="outlined" size="small" color="primary">
                                <strong>
                                    <a href={project.github} taget="_blank">
                                        Github</a>
                                </strong>
                            </Button>
                            {
                                project.website === "" ?
                                    <Button className="call-to-action-buttons" disabled variant="outlined" size="small">Website</Button>
                                    : <Button className="call-to-action-buttons" variant="outlined" size="small" color="secondary">
                                        <strong>
                                            <a href={project.website} taget="_blank" rel="noreferrer noopener">Website</a>
                                        </strong>
                                    </Button>
                            }
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    );
}

export default ProjectCards
