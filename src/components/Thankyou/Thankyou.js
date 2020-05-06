import React, { useEffect } from 'react'
import './Thankyou.scss'
import Button from '@material-ui/core/Button'

const Thankyou = ({ handleThankyou }) => {

    useEffect(() => {
        setTimeout(() => {
            const thankyouHolder = document.getElementById('thankyou__holder');
            thankyouHolder.style.transform = 'scale(1)'
        }, 100)
    }, [])

    return (
        <div id="thankyou__holder" className="thankyou__holder">
            <h1>Message sent..!!</h1>
            <h2>Thank you for contacting me. I'll get back to you as soon as I can.</h2>
            <Button onClick={handleThankyou} variant="outlined" color="primary">
                <strong>Send again?</strong>
            </Button>
        </div>
    )
}

export default Thankyou
