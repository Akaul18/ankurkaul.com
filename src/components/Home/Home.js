import React, { useState } from 'react'
import './Home.scss'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import banner from '../../assets/images/banner-img.jpg'
import HireMe from '../HireMe'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    }
}))
const Home = () => {

    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const classes = useStyles();
    return (
        <div>
            <HireMe open={openDialog} handleClose={handleClose} />
            <main className="home__main">
                <div className="home__main-clipart"></div>
                <div className="self-intro__container">
                    <div className="self-intro">
                        <div>
                            <h1>Hey, I am Ankur Kaul</h1>
                            <h3>A Full stack developer <span><em>by choice </em> </span></h3>
                        </div>
                        <div className="self-intro__image">
                            {/* <div class="self-intro__image-clipart"></div> */}
                            <img src={banner} alt="banner" />
                        </div>
                        <p>I strongly <em>believe</em> that we can build our future as we want it to be. So, other than my interest in learning new Technologies and building Web based applications for almost 2 years now, I also like to keep working on myself to be a more <em>positive</em> and <em>self motivated person</em>.</p>
                        <div>
                            <Button className={classes.margin} variant="outlined" size="medium" color="primary">
                                <strong><Link to="/contact">Need a website?</Link></strong>
                            </Button>

                            <Button onClick={handleClickOpen} className={classes.margin} variant="outlined" size="medium" color="secondary">
                                <strong>Want to hire me?</strong>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
