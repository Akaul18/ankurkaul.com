import React, { useState, useEffect } from 'react'
import './Contact.scss'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLinkedinBoxLine } from 'react-icons/ri'
import { GoMarkGithub } from 'react-icons/go'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { sendEmail } from '../../services/api'
import BarLoader from 'react-spinners/BarLoader'

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    }
}))
const Contact = props => {

    const [emailSent, setEmailSent] = useState(false)
    useEffect(() => {
        const contactDetails = document.getElementById('contact-details');
        contactDetails.style.transform = 'scale(1)'
    }, [])

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
        sendEmail(state)
            .then(res => {
                setEmailSent(true)
                if (res.status === 200) {
                    setState({
                        name: '',
                        company: '',
                        email: '',
                        contactNumber: '',
                        message: '',
                    })
                    setEmailSent(false)
                    alert('Message successfully sent')
                } else {
                    setEmailSent(false)
                    alert("Something went wrong..!! Please try again in sometime")
                }
            })
            .catch(err => alert("Something went wrong..!! Please try again in sometime"))
    }

    const classes = useStyles()
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
                <div id="contact-details" className="contact-details">
                    <h1>Get in touch with me</h1>
                    {/* {emailSent ? */}
                    {/* <BarLoader /> : */}
                    <form>
                        <div>
                            <TextField inputProps={{ autoFocus: true }} className="contact-details__fields" id="standard-basic" label="Name*" onChange={handleChange('name')} />
                            <TextField className="contact-details__fields" id="standard-basic" label="Company" onChange={handleChange('company')} />
                            <TextField className="contact-details__fields" id="standard-basic" label="Email*" onChange={handleChange('email')} />
                            <TextField className="contact-details__fields" id="standard-basic" label="Contact Number" onChange={handleChange('contactNumber')} />
                            <TextField className="contact-details__fields" multiline rows={2} id="standard-basic" label="Message*" onChange={handleChange('message')} />
                        </div>
                        <div>
                            <Button onClick={submitForm} className={`send-message ${classes.margin}`} variant="outlined" color="primary">
                                <strong>Send</strong>
                            </Button>
                        </div>
                    </form>
                    {/* } */}
                </div>
            </main>
        </div >
    )
}

export default Contact
