import React, { useState, useEffect } from 'react'

const ProjectCards = ({ projects }) => {
    const [width, setWidth] = useState(0)
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
                    <div key={project.id} className="project-cards__image-holder">
                        {width >= '720' ?
                            <img src={`/assets/images/instock.png`} alt={project.title} />
                            : <img src={`/assets/images/instock-mobile.png`} alt={project.title} />
                            // <img src={`/${project.imgPathDesktop}`} alt={project.title} />
                            // : <img src={`/${project.imgPathMobile}`} alt={project.title} />
                        }
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectCards
