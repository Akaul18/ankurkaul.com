import React from 'react'
import './Contact.scss'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLinkedinBoxLine } from 'react-icons/ri'
import { GoMarkGithub } from 'react-icons/go'

const Contact = props => {
    return (
        <div>
            <main className="contact__main">
                <div className="my-contact-card">
                    <div className="clipart"></div>
                    <div>
                        <h2>ANKUR <span>KAUL</span></h2>
                        <h3><span>Full -</span> stack developer</h3>
                        <ul>
                            <li><span><AiOutlineMail /></span> <span>ankurkaul1894@gmail.com</span></li>
                            <li><span><RiLinkedinBoxLine /></span> www.linkedin.com/in/ankurkaul1894</li>
                            <li><span><GoMarkGithub /></span> www.github.com/Akaul18</li>
                        </ul>
                    </div>
                </div>
                <div className="contact-details">

                </div>
            </main>
        </div>
    )
}

export default Contact
