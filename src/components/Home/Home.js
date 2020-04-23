import React, { useEffect, useRef } from 'react'
import './Home.scss'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import banner from '../../assets/images/banner-img.jpg'

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    }
}))
function Home() {

    const h1Ref = useRef(null)
    useEffect(() => {
        h1Ref.current.style.translateX = "0";
    }, [])

    const classes = useStyles();
    return (
        <div>
            <main class="home__main">
                <div className="self-intro__container">
                    <div className="self-intro">
                        <div>
                            <h1 ref={h1Ref}>Hey, I am Ankur Kaul</h1>
                            <h3>A Full stack developer <span><em>by choice </em> </span></h3>
                        </div>
                        <div className="self-intro__image">
                            <img src={banner} alt="banner" />
                        </div>
                        <p>I strongly <em>believe</em> that we can build our future as we want it to be. So, other than my interest in learning new Technologies and building Web based applications for almost 2 years now, I also like to keep working on myself to be a more <em>positive</em> and <em>self motivated person</em>.</p>
                        <div>
                            <Button className={classes.margin} variant="outlined" size="medium" color="primary">
                                Need a website?
                            </Button>

                            <Button className={classes.margin} variant="outlined" size="medium" color="secondary">
                                Want to hire me?
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div >
    )
}

// const styles = {
//     bannerLogo: {
//         maxWidth: '100%',
//     }
// }

export default Home
