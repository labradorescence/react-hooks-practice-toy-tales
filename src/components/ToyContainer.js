import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( { toysArr } ) { //obj de-structuring

  //console.log(toysArr) // []

  const toyC = toysArr.map((eachToyObj) => {
    return <ToyCard toy = {eachToyObj} key={eachToyObj.id}/>
  })

  return (
    <div id="toy-collection">{toyC}</div>
  );
}

export default ToyContainer;
