import React from 'react';
// import { Link } from 'react-router-dom';
import './Country.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Country = (props) => {
  const classes = useStyles();
  const { name, capital, flag, region, population } = props.country;
  // console.log(props.country)

  const history = useHistory();
  const handleClick = (countryName) => {
    history.push(`/name/${countryName}`)
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={flag}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Country: {name}
            <br />
             Capital: {capital}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Region: {region}</p>
            <p>Population: {population}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={"/name/" + name}>Show details</Link>
        <Button onClick={() => handleClick(name)} size="small" color="primary">
          More Info
          </Button>
      </CardActions>
    </Card>

  );
};

export default Country;