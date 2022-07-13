import React from 'react';
import {MyFavoriteData} from "../../localData/MyFavoriteData";
import Card from "../../components/card";



export default function FavoritePage() {

  return (
    <div className='landingPage-container'>
      {MyFavoriteData.map((item, key) => {
        return <Card key = {key} value = {{item, isFavoite: true}} />
      })}
    </div>
  );
}
