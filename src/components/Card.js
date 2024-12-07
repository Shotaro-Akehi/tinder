import React from "react";

const Card = ({ place }) => {
  return (
    <div className="card">
      <img src={place.image} alt={place.name} />
      <h2>{place.name}</h2>
      <p>{place.description}</p>
    </div>
  );
};

export default Card;
