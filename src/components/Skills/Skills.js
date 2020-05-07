import React, { useState, useEffect } from 'react'
import './Skills.scss'
import { getSkills } from '../../services/api'

const Skills = ({ handleActiveLink }) => {

    const [skillsTypes, setSkillsType] = useState([])

    useEffect(() => {
        handleActiveLink(window.location.pathname)
    }, [handleActiveLink])

    useEffect(() => {
        getSkills()
            .then(res => {
                setSkillsType(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const getProficiency = (proficiency) => {
        const div = []
        for (let i = 0; i < proficiency; i++) {
            div.push(<div key={i} style={{ background: 'green' }}></div>)
        }
        for (let i = 0; i < 10 - proficiency; i++) {
            div.push(<div key={10 - i} style={{ background: 'red' }}></div>)
        }
        return div
    }

    return (
        <div>
            <main className="skills__main">
                {
                    skillsTypes.map(type =>
                        <div key={type.id} className="box__parent">
                            <h1>{type.skill_type}</h1>
                            <hr />
                            {/* <div className="box__parent-skills-parent"> */}
                            {
                                type.skills.map(skill =>
                                    <div key={skill.id} className="box__parent-skills">
                                        <div className="box__parent-skills-heading"><strong>{skill.skill_name}</strong></div>
                                        <div className="box__parent-meter">
                                            {getProficiency(skill.skill_proficiency)}
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        // </div>
                    )
                }
            </main>
        </div>
    )
}

export default Skills
