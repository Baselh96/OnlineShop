import React, { useState } from 'react';
import "./style.css";
import MyCard from '../../components/card';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {UserData} from "../../localData/UserData";
import MuiAlert from '@mui/material/Alert';
import {CardData} from "../../localData/CardData";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MyArticlesPage() {
  const [user, setUser] = useState(UserData);


  return (
    <div position="static">
      <Card className= "myArticles-card">
        <CardHeader
          action={
              <div>
                <Button variant="outlined" color="primary" >
                  Neue Artikel hinzufügen
                </Button>
            </div>
          }
          title= {"Artikels suchen und die Artikels anlegen, bearbeiten und löschen"}
          //später durch subheader ersetzen
          subheader={"Sie haben: 200 Artikels angelegt"}
        />
        <CardActions disableSpacing className='card-actions'> 
          <div className="nav-search" >
            search
          </div>
          <Button variant="outlined">suchen</Button>
        </CardActions>
      </Card>

      <hr />
      
      <div className='landingPage-container'>
        {CardData.map((item, key) => {
          return <MyCard key = {key} value = {{item, isFavoite: false, isAdmin: true}} />
        })}
      </div>
    </div>
  );
}
