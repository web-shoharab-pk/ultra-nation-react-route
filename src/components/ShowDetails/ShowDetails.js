import React, { useEffect } from 'react';
import './ShowDetails.css'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.development';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ShowDetails = () => {
  const classes = useStyles();

  let { countryName } = useParams();

  const [country, setUser] = useState({})
  console.log(country);
  // country.map(item => console.log(item))
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        data.map(item => setUser(item))
      }
      )
  }, [])
  return (
    <div className="detail-div">
      <div>

      
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={country.flag}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Country: {country.name}

            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Capital: {country.capital} <br />
                 Region: {country.region} <br />
                 Population: {country.population} <br />
                 Area: {country.area} <br />
                 nativeName: {country.nativeName}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>

          <Button size="small" color="primary">

            <Link to="/">Back Home</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
    </div>
  );
};

export default ShowDetails;