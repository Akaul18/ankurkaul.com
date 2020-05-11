import React, { useState, useEffect } from 'react'
import './Skills.scss'
import { getSkills } from '../../services/api'
import styled, { keyframes } from 'styled-components'

const Skills = ({ handleActiveLink }) => {

    const [skillsTypes, setSkillsType] = useState([])
    const [loadAnimation, setLoadAnimation] = useState(false)

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

    useEffect(() => {
        // let progressContainer = ''
        let boxParentHead = ''
        const animateSkills = () => {
            // progressContainer.forEach(child => {})
            boxParentHead.forEach(children => {
                let bounding = children.getBoundingClientRect()
                console.log(bounding)
                if (bounding.bottom <= 1000) {
                    setLoadAnimation(true)
                }
            })
            // setLoadAnimation(false)
        }
        setTimeout(() => {
            // progressBar = document.getElementsByClassName("progress")
            // progressContainer = document.getElementsByClassName("box__parent-skills-progress-container")
            boxParentHead = document.getElementsByClassName("box__parent-head")

            // progressContainer = [...progressContainer]
            boxParentHead = [...boxParentHead]
            document.addEventListener('scroll', animateSkills)
        }, 1000)

        return () => {
            document.removeEventListener('scroll', animateSkills)
        }
    }, [])

    let count = 1.3;
    const getWidth = width => {
        const widthInc = keyframes`
            0% {
                width:0;
            }

            100%{
                width:${width};
            }`

        const Div = styled.div`
        text-align: right;
        width: ${width};
        height: 100%;
        background: #3f51b5;
        color: #fff;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        animation: ${widthInc} ${count += 0.1}s ease-in-out 0s 1 normal;
        `
        const Span = styled.span`
            padding-right:0.5rem;
        `

        return (
            <Div id="progress" className="box__parent-skills-progress-bar">
                <Span><strong>{width}</strong></Span>
            </Div>
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
                                                    {loadAnimation && getWidth(`${skill.skill_proficiency}0%`)}
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
