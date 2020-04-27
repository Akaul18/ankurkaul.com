import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import instock from '../../assets/images/instock.png';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function ProjectCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    style={{ objectFit: 'contain' }}
                    className={classes.media}
                    image={instock}
                    title="Instock project screenshot home page"
                />
                <CardContent>
                    <Typography style={{ letterSpacing: '1px' }} gutterBottom variant="h5" component="h2">
                        InStock
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" color="primary">
                    Share
                </Button> */}
                <Button style={{}} variant="outlined" size="small" color="primary">
                    View on Github
                </Button>
            </CardActions>
        </Card>
    );
}