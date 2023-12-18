import React from "react";

function ToyCard( { toy, onHandleDelete }) {

  const handleDelete = () => {
     fetch(`http://localhost:3001/toys/${toy.id}`, {
      method:"DELETE"
     })
     .then(response => response.json())
     .then(data => console.log(data))
     onHandleDelete(toy.id)
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick = {handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
