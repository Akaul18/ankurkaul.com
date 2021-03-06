import React, { useState } from 'react'
import './Home.scss'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import HireMe from '../HireMe'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import LightSpeed from 'react-reveal/LightSpeed'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import SmoothImage from 'react-smooth-image'

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    }
}))


// const Home = ({ handleActiveLink }) => {
const Home = () => {

    const [openDialog, setOpenDialog] = useState(false);
    React.useEffect(() => {
        // handleActiveLink(window.location.pathname)
        // const h1Ref = document.getElementById('h1Ref')
        // const h3Ref = document.getElementById('h3Ref')
        // const pRef = document.getElementById('pRef')

        // h1Ref.style.transform = 'translateX(0)';
        // h3Ref.style.transform = 'translateY(0)';
        // pRef.style.transform = 'translateY(0)';
        // }, [handleActiveLink])
    }, [])

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
            <main id="home__main" className="home__main">
                <div className="home__main-clipart"></div>
                <div className="self-intro__container">
                    <div className="self-intro">
                        <div>
                            <LightSpeed left>
                                <h1 id="h1Ref">Hey, I am Ankur Kaul</h1>
                            </LightSpeed>
                            <Fade top>
                                <h3 id="h3Ref">A Full stack developer <span><em>by choice </em> </span></h3>
                            </Fade>
                        </div>
                        <div className="self-intro__image">
                            <Zoom>
                                {/* <LazyLoad> */}
                                <SmoothImage
                                    src={`/assets/images/banner-img.jpg`}
                                    alt="banner"
                                    transitionTime={1.0}
                                />
                                {/* <img */}
                                {/* src={`/assets/images/banner-img-3.jpg`} */}
                                {/* alt="banner" /> */}
                                {/* </LazyLoad> */}
                            </Zoom>
                        </div>
                        {/* <Slide bottom> */}
                        <p id="pRef">I strongly <em>believe</em> we can build our future as we want it to be. So, other than my interest in learning new Technologies and building Web based applications for almost 2 years now, I also like to keep working on myself to be a more <em>positive</em> and <em>self motivated person</em>.</p>
                        {/* </Slide> */}
                        <div>
                            <Button id="btn1" className={classes.margin} variant="outlined" size="medium" color="primary">
                                {/* <strong><Link to="/contact">Need a website?</Link></strong> */}
                                <strong><Link to="Contact">Need a website?</Link></strong>
                            </Button>

                            <Button id="btn2" onClick={handleClickOpen} className={classes.margin} variant="outlined" size="medium" color="secondary">
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
