import React from 'react';
import "./Style.scss";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IoMdShare } from "react-icons/io";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";


export default function RecipeReviewCard({value}) {
  const {item} = value;

  return (
    <Card className= "card-container">
      <CardHeader
        action={
            <div>
               <IconButton aria-label="add to favorites">
                    <MdFavoriteBorder />
                    <MdFavorite />
                </IconButton>
                <IconButton aria-label="share">
                    <IoMdShare />
                </IconButton>
          </div>
        }
        title= {item.title}
        //später durch subheader ersetzen
        subheader={item.title}
      />
      <CardMedia
        className="card-image"
        image="https://th.bing.com/th/id/R.772a66c023fbca5f8112389757ccce5e?rik=g0BFXCg8avbSyA&pid=ImgRaw&r=0.jpg"
        title={item.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description.length < 45 ? item.description: item.description.substring(0, 42)+"..." }
        </Typography>
      </CardContent>
      <CardActions disableSpacing className='card-actions'> 
        <Button variant="outlined" color="primary" >
          anzeigen
        </Button>
        <Button variant="outlined" color="primary" >
          kaufen
        </Button>
      </CardActions>
    </Card>
  );
}