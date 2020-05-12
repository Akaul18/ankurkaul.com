import React, { useState } from 'react'
import './Contact.scss'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLinkedinBoxLine } from 'react-icons/ri'
import { GoMarkGithub } from 'react-icons/go'
import { sendEmail } from '../../services/api'
import Backdrop from '../Backdrop'
import validator from 'email-validator'
import Thankyou from '../Thankyou';
import Form from '../Form';

// const Contact = ({ handleActiveLink }) => {
const Contact = () => {

    // useEffect(() => {
    // handleActiveLink(window.location.pathname)
    // }, [handleActiveLink])

    const [isLoading, setIsLoading] = useState(false)
    const [showThankyou, setShowThankyou] = useState(false)
    const [state, setState] = useState({
        name: '',
        company: '',
        email: '',
        contactNumber: '',
        message: '',
    })

    const handleChange = input => e => {
        setState({
            ...state,
            [input]: e.target.value
        })
    }

    const submitForm = e => {

        //api call to node
        e.preventDefault()
        const validatedEmail = validator.validate(state.email)
        if (state.name === '' || state.email === '' || state.message === '') {
            alert('Fields marked with * cannot be left blank')
        } else if (!validatedEmail) {
            alert('Email entered is not valid')
        } else {
            setIsLoading(true)
            sendEmail(state)
                .then(res => {
                    if (res.status === 200) {
                        setShowThankyou(true)
                        setIsLoading(false)
                    } else {
                        alert("Something went wrong..!! Please try again in sometime")
                        setShowThankyou(false)
                        setIsLoading(false)
                    }
                })
                .catch(err => {
                    alert("Something went wrong..!! Please try again in sometime")
                    setShowThankyou(false)
                    setIsLoading(false)
                })
        }
    }

    const handleThankyou = () => {
        setShowThankyou(false)
    }

    let email = 'ankurkaul1894@gmail.com'
    let linkedin = 'https://linkedin.com/in/ankurkaul1894'
    let github = 'https://github.com/Akaul18'
    return (
        <div>
            {isLoading && <Backdrop />}
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


                {!showThankyou ?
                    <Form handleChange={handleChange} submitForm={submitForm} />
                    : <Thankyou handleThankyou={handleThankyou} />
                }
            </main>
        </div>
    )
}

export default Contact
