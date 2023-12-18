import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [ toys, setToys ] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(response => response.json())
    .then(toyArr => setToys(toyArr))
  },[])

  console.log(toys)

  const onHandleDelete = (toyId) => {
    const toysWithoutDeletedToy = toys.filter((eachToy) => {
     return eachToy.id !== toyId
    })
    setToys(toysWithoutDeletedToy)
  }

  const handleAddNewToy = (newToy) => {
    setToys([...toys, newToy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddNewToy={handleAddNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys = { toys } onHandleDelete={onHandleDelete}/>
    </>
  );
}

export default App;
