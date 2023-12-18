import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [ toys, setToys ] = useState( [] )

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }



  useEffect(()=> {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then(setToys)
      //.then(data => setToys(data))
  }, [])

  const handleAddToy = ( newToy ) => { //newToy  === {}
    setToys([...toys, newToy]) //toys=== []
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toysArr={toys}/>
    </>
  );
}

export default App;
