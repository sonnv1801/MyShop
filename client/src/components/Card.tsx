import React from 'react';

export const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-top">
          <img src={props.items.imgPath} alt={props.items.name} />
          <h1>{props.items.name}</h1>
        </div>
        <div className="card-bottom">
          <h3>{props.items.price}</h3>
          <span className="category">{props.items.oldprice}</span>
        </div>
      </div>
    </>
  );
};
