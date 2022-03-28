import React from "react";

const Card = (props) => {
  const { name, price } = props.products;
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}$</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          doloremque, deserunt tempore dolores voluptatum quis molestias aliquam
          provident, consectetur corrupti nisi saepe aperiam exercitationem! Et,
          ut officiis atque labore fugiat ratione repellat ab vitae laborum?
        </p>
      </div>
    </div>
  );
};

export default Card;
