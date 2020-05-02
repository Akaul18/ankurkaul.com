import React from 'react'
import './ProjectCards.scss'
import Button from '@material-ui/core/Button'
import ReactImageAppear from 'react-image-appear'

const ProjectCards = ({ projects }) => {
    return (
        <div className="project-cards" >
            {/* <div className="project-cards__holder"> */}
            {projects.map(project =>
                <div id={`holder-${project.id}`} key={project.id} className="project-cards__holder">
                    <div className="project-cards__image-holder">
                        {/* <ReactImageAppear
                            style={{ background: 'none' }}
                            src={`/assets/images/${project.imgTitleDesktop}`}
                            animation="bounceIn"
                            easing="ease-in-out"
                            animationDuration="1s"
                        /> */}
                        <img
                            // className="bounce"
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
                                        View Github</a>
                                </strong>
                            </Button>
                            {
                                project.website === "" ? <Button className="call-to-action-buttons" disabled variant="outlined" size="small">Open Web App</Button>
                                    : <Button className="call-to-action-buttons" variant="outlined" size="small" color="secondary">
                                        <strong>
                                            <a href={project.website} taget="_blank">Open Web App</a>
                                        </strong>
                                    </Button>
                            }
                        </div>
                    </div>
                </div>
            )}
            {/* </div> */}
        </div>
    );
}

export default ProjectCards
