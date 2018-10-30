import React from "react";

const Card = props => {
    return (
      <div className="card col-lg-6 m-2">
        <div className="card-body"/>
        <h4 className="card-title">{props.chirp.name}</h4>
        <p className="card-text">{props.chirp.text}</p>
      </div>
    );
};

export default Card;