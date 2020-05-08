import React, { useState, useEffect } from 'react'
import './Skills.scss'
import { getSkills } from '../../services/api'
import { keyframes } from 'styled-components'

const Skills = ({ handleActiveLink }) => {

    const [skillsTypes, setSkillsType] = useState([])

    useEffect(() => {
        handleActiveLink(window.location.pathname)
    }, [handleActiveLink])

    useEffect(() => {
        getSkills()
            .then(res => {
                setSkillsType(res.data)
                // console.log(res.data)
            })
    }, [])

    const getWidth = width => {
        const widthInc = keyframes`
            from {
                width:0;
            }to{
                width:${width};
            }`

        const progress_bar = {
            animation: `${widthInc} 2s ease-in-out 0s 1 normal`,
            textAlign: "right",
            width: 0,
            height: "100%",
            background: "#3f51b5",
            color: "#fff",
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px"
        }

        return (
            <div style={progress_bar} className="box__parent-skills-progress-bar">
                <span><strong>{width}</strong></span>
            </div>
        )
    }


    return (
        <div>
            <main className="skills__main">
                <div className="box__parent">
                    <h1>Skills</h1>
                    <hr width="80px" />
                    {
                        skillsTypes.map(types =>
                            <div key={types.id} className="box__parent-head">
                                <h2>{types.skill_type}</h2>
                                <div className="box__parent-skills">
                                    {
                                        types.skills.map(skill =>
                                            <div key={skill.id} className="box__parent-skills-container">
                                                <div className="box__parent-skills-heading"><strong>{skill.skill_name}</strong></div>
                                                <div className="box__parent-skills-progress-container">
                                                    {getWidth(`${skill.skill_proficiency}0%`)}
                                                    {/* <div className="box__parent-skills-progress-bar" style={{ width: `${skill.skill_proficiency}0%` }}>
                                                        <span><strong>{`${skill.skill_proficiency}0%`}</strong></span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </main>
        </div>
    )
}

export default Skills
