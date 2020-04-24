import React, { useState } from 'react';
import './HireMe.scss'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const HireMe = ({ open, handleClose }) => {
    const [value, setValue] = useState('');
    const [email, setEmail] = useState('');
    const [description, setdescription] = useState('');

    const handleChange = e => {
        setValue(e.target.value)
    };

    const handleDescriptionChange = e => {
        setdescription(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    let sendButton = '';
    if (value === '' || description === '' || email === '') {
        sendButton = <Button variant="outlined" disabled>
            <strong>Send inquiry</strong>
        </Button>
    } else {
        sendButton = <Button onClick={handleClose} color="primary">
            <strong>Send inquiry</strong>
        </Button>
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Want to hire me? Send me an inquery</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please provide a brief description of your work opportunity and I'll get back to you as soon as I can.
                    </DialogContentText>
                <InputLabel
                    className="type-of-work-label"
                    id="demo-simple-select-outlined-label">
                    Type of work<span style={{ color: 'red' }}>*</span>
                </InputLabel>
                <Select
                    className="type-of-work"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={value}
                    onChange={handleChange}
                    label="Type of work"
                >
                    <MenuItem value="full">Full time</MenuItem>
                    <MenuItem value="hourly">Hourly rate</MenuItem>
                    <MenuItem value="fixed">Fixed rate</MenuItem>
                </Select>
                <div className="email">
                    <TextField
                        className="email__input"
                        margin="dense"
                        id="email"
                        value={email}
                        label="Email Address"
                        type="email"
                        onChange={handleEmailChange}
                    />
                </div>
                <TextField
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
                <Button onClick={handleClose} color="primary">
                    <strong>Cancel</strong>
                </Button>
                {sendButton}
            </DialogActions>
        </Dialog>
    );
}

export default HireMe
