import React, { useState } from "react";

function ToyForm( { onAddToy }) {

  const initObj =  {
    "name": "",
    "image": "",
    "likes": 0
  }

  const [ formData, setFormData ] = useState(initObj)

  //onChange, value, state

  const handleChange = (e) => {

    const { name, value } = e.target
    setFormData( {
      ...formData,
      // [e.target.name]: e.target.value
      [name]: value
    })
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => onAddToy(data)) //pessimistic

    // onAddToy(formData) //optimistic
    setFormData(initObj)
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
