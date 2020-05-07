import React, { useState } from 'react'
import './HireMe.scss'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { sendInquiry } from '../../services/api'
import validator from 'email-validator'

const HireMe = ({ open, handleClose }) => {
    const [workType, setWorkType] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const close = () => {
        setPosition('')
        setWorkType('')
        setEmail('')
        setDescription('')
        handleClose()
    }

    const handleTypePositionChange = e => {
        setPosition(e.target.value)
    }

    const handleTypeWorkChange = e => {
        setWorkType(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handleDescriptionChange = e => {
        setDescription(e.target.value)
    }


    const send = () => {
        const validatedEmail = validator.validate(email)
        if (!validatedEmail) {
            alert('Email entered is not valid')
        } else {
            sendInquiry(position, workType, email, description)
                .then(res => {
                    if (res.status === 200) {
                        alert("Inquiry sent successfully. \nI'll get back to you as soon as I can")
                        setPosition('')
                        setWorkType('')
                        setEmail('')
                        setDescription('')
                        handleClose()
                    }
                })
                .catch(err => {
                    alert("Error while sending message. Please try again after sometime")
                    handleClose()
                })
        }
    }

    let sendButton = '';
    if (workType === '' || description === '' || email === '' || position === '') {
        sendButton = <Button variant="outlined" disabled>
            <strong>Send inquiry</strong>
        </Button>
    } else {
        sendButton = <Button onClick={send} color="primary">
            <strong>Send inquiry</strong>
        </Button>
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Want to hire me? Send me an inquiry</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please provide a brief description of your work opportunity and I'll get back to you as soon as I can.
                </DialogContentText>
                <div className="work-position">
                    <div>
                        <InputLabel className="type-of-position-label">
                            Position to hire<span style={{ color: 'red' }}>*</span>
                        </InputLabel>
                        <Select
                            className="type-of-position"
                            value={position}
                            onChange={handleTypePositionChange}
                            label="Type of work"
                        >
                            <MenuItem value="frontend">Frontend developer</MenuItem>
                            <MenuItem value="backend">Backend developer</MenuItem>
                            <MenuItem value="fullstack">Full stack</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <InputLabel
                            className="type-of-work-label"
                            id="demo-simple-select-outlined-label">
                            Type of work<span style={{ color: 'red' }}>*</span>
                        </InputLabel>
                        <Select
                            className="type-of-work"
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={workType}
                            onChange={handleTypeWorkChange}
                            label="Type of work"
                        >
                            <MenuItem value="full">Full time</MenuItem>
                            <MenuItem value="hourly">Hourly rate</MenuItem>
                            <MenuItem value="fixed">Fixed rate</MenuItem>
                        </Select>
                    </div>
                </div>
                <div className="email">
                    <TextField
                        className="email__input"
                        margin="dense"
                        id="email"
                        value={email}
                        label="Email Address"
                        type="email"
                        onChange={handleEmailChange}
                        fullWidth
                    />
                </div>
                <TextField
                    className="descLabel"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    value={description}
                    placeholder="Enter a brief description"
                    variant="outlined"
                    onChange={handleDescriptionChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={close} color="primary">
                    <strong>Cancel</strong>
                </Button>
                {sendButton}
            </DialogActions>
        </Dialog>
    );
}

export default HireMe
