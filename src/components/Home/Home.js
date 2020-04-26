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
    React.useEffect(() => {
        const h1Ref = document.getElementById('h1Ref')
        const h3Ref = document.getElementById('h3Ref')
        const pRef = document.getElementById('pRef')
        const btn1 = document.getElementById('btn1')
        const btn2 = document.getElementById('btn2')
        h1Ref.style.transform = 'translateX(0)';
        h3Ref.style.transform = 'translateY(0)';
        pRef.style.transform = 'translateY(0)';
        btn1.style.transform = 'translateY(0)';
        btn2.style.transform = 'translateY(0)';
    }, [])

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
                            <h1 id="h1Ref">Hey, I am Ankur Kaul</h1>
                            <h3 id="h3Ref">A Full stack developer <span><em>by choice </em> </span></h3>
                        </div>
                        <div className="self-intro__image">
                            {/* <div class="self-intro__image-clipart"></div> */}
                            <img src={banner} alt="banner" />
                        </div>
                        <p id="pRef">I strongly <em>believe</em> that we can build our future as we want it to be. So, other than my interest in learning new Technologies and building Web based applications for almost 2 years now, I also like to keep working on myself to be a more <em>positive</em> and <em>self motivated person</em>.</p>
                        <div>
                            <Button id="btn1" className={classes.margin} variant="outlined" size="medium" color="primary">
                                <strong><Link to="/contact">Need a website?</Link></strong>
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
