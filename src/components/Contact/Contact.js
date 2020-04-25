import React from 'react'
import './Contact.scss'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLinkedinBoxLine } from 'react-icons/ri'
import { GoMarkGithub } from 'react-icons/go'
import TextField from '@material-ui/core/TextField'

const Contact = props => {
    let email = 'ankurkaul1894@gmail.com'
    let linkedin = 'https://linkedin.com/in/ankurkaul1894'
    let github = 'https://github.com/Akaul18'
    return (
        <div>
            <main className="contact__main">
                <div className="my-contact-card">
                    <div className="clipart"></div>
                    <div>
                        <h2>ANKUR <span>KAUL</span></h2>
                        <h3><span>Full -</span> stack developer</h3>
                        <ul>
                            <li><a href={`mailto:${email}`} taget="_blank" rel='noreferrer noopener'><span><AiOutlineMail /></span> <strong>ankurkaul1894@gmail.com</strong></a></li>
                            <li><a href={linkedin} target="_blank" rel='noreferrer noopener'><span><RiLinkedinBoxLine /></span><strong> www.linkedin.com/in/ankurkaul1894</strong></a></li>
                            <li><a href={github} target="_blank" rel='noreferrer noopener'><span><GoMarkGithub /></span><strong> www.github.com/Akaul18</strong></a></li>
                        </ul>
                    </div>
                </div>
                <div className="contact-details">
                    <h1>Get in touch with me</h1>
                    <div>
                        <TextField className="contact-details__fields" id="standard-basic" label="Name" />
                        <TextField className="contact-details__fields" id="standard-basic" label="Company" />
                        <TextField className="contact-details__fields" id="standard-basic" label="Email" />
                        <TextField className="contact-details__fields" id="standard-basic" label="Contact Number" />
                        <TextField className="contact-details__fields" multiline rows={2} id="standard-basic" label="Message" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contact
