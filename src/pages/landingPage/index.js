import React from 'react';
import "./style.css";
import {CardData} from "../../localData/CardData";
import Card from "../../components/card";




export default function LandingPage() {
  console.log(CardData);

  return (
    <div className='landingPage-container'>
      {CardData.map((item, key) => {
        return <Card key = {key} value = {{item, isFavoite: false, isAdmin: false}} />
      })}
    </div>
  );
}
