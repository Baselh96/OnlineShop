import React from 'react';
import "./Style.scss";
import {CardData} from "../../localData/CardData";
import Card from "../../components/card";




export default function LandingPage() {
  console.log(CardData);

  return (
    <div className='landingPage-container'>
      {CardData.map((item, key) => {
        return <Card key = {key} value = {{item}} />
      })}
    </div>
  );
}
