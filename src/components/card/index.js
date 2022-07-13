import React, { useState } from 'react';
import "./style.css";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IoMdShare } from "react-icons/io";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import {MyFavoriteData} from "../../localData/MyFavoriteData";

export default function RecipeReviewCard({value}) {
  const {item, isFavoite} = value;
  const [favorited, setFavorited] = useState(isFavoite);

  //ToDo: Änderen durch die API-Anfrage
  const addToFavorite = () => {
    if(favorited) {
      MyFavoriteData.pop();
    } else {
      MyFavoriteData.unshift(item);
    }
    setFavorited(!favorited);
  }

  return (
    <Card className= "card-container">
      <CardHeader
        action={
            <div>
               <IconButton aria-label="add to favorites" onClick={addToFavorite}>
                    {favorited ? <MdFavorite />: <MdFavoriteBorder />}
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
          {item.description.length < 40 ? item.description: item.description.substring(0, 36)+"..." }
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