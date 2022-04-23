import "../App.css";
import {  useEffect, useState } from "react";


const Result = (props) => {

  const [price, setPrice] = useState(0)
  const [cost, setCost] = useState()


  useEffect(() =>{
    const length = props.length
    const multiplier = 1.1
    const maxPerDay = 800
    const days = length/maxPerDay
    const restOfDistance = length%maxPerDay
  
    setCost(((Math.trunc(days)*1000+restOfDistance*price)*multiplier).toFixed(2))
  },[props.length, price])

  return (
    <>
     <div className="summary">
       <p>Distance : {props.length}km</p>
       
        <form><input placeholder="price/km" value={price} onChange={(e) => setPrice(e.target.value)}></input></form>
        <p>Cost :{cost}zł </p>
        
      </div>
    </>
  );
};

export default Result;
