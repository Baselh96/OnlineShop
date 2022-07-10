import React from 'react';
import {CardData} from "../../localData/CardData";
import Card from "../../components/card";




export default function LandingPage() {
  console.log(CardData);

  return (
    <div >
      {CardData.map(item => {
        return <Card value = {{item}} />
      })}
    </div>
  );
}
