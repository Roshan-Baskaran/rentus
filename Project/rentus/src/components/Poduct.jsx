import React from "react";
import Cards from "./Cards";
import cards from "../constants/index"


function Poduct() {
  return (
    <div className= "bg-sky-200 overflow-clip  px-6 py-16 gap-7  grid  h-full mt-10 mx-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-4">
    {cards.map(function(val,index){
   return(<Cards key={index} data={val} id={index}/>);
    })}
    
    

    </div>
  );
}

export default Poduct;
