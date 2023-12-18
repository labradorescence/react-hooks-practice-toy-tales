import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( {toys, onHandleDelete}) {

  const toyC = toys.map((eachToy ) => {
    return <ToyCard toy = {eachToy} key={eachToy.id} onHandleDelete={onHandleDelete}/>
  })

  return (
    <div id="toy-collection">{toyC}</div>
  );
}

export default ToyContainer;
