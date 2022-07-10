import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { IoMdShare } from "react-icons/io";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({value}) {
    const {item} = value;
    console.log(item)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
            <div>
               <IconButton aria-label="add to favorites">
                    <MdFavoriteBorder />
                </IconButton>
                <IconButton aria-label="share">
                    <IoMdShare />
                </IconButton>
          </div>
        }
        title= {item.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://th.bing.com/th/id/R.772a66c023fbca5f8112389757ccce5e?rik=g0BFXCg8avbSyA&pid=ImgRaw&r=0.jpg"
        title={item.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <MdFavoriteBorder />
        </IconButton>
        <IconButton aria-label="share">
          <IoMdShare />
        </IconButton>
      </CardActions>
    </Card>
  );
}