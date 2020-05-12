import React, { useEffect } from 'react'
import './Form.scss'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Zoom from 'react-reveal/Zoom'

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    }
}))

const Form = ({ handleChange, submitForm }) => {

    const classes = useStyles()
    useEffect(() => {
        const contactDetails = document.getElementById('contact-details');
        contactDetails.style.transform = 'scale(1)'
    }, [])

    return (
        <div id="contact-details" className="contact-details">
            <Zoom>
                <form>
                    <h1>Get in touch with me</h1>
                    <div>
                        {/* <TextField inputProps={{ autoFocus: true }} className="contact-details__fields" id="standard-basic" label="Name*" onChange={handleChange('name')} /> */}
                        <TextField inputProps={{ autoFocus: false }} className="contact-details__fields" id="standard-basic" label="Name*" onChange={handleChange('name')} />
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
            </Zoom>
        </div>
    )
}

export default Form
