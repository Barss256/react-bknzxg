import React from "react";


export default function Knof(props) {
 const klik = () => {
   alert ('Clicked ' + props.title);
   };
 
  return (
    <button className={props.color} onClick= {klik}>
    {props.title}
    </button>
  );
}
