import React from "react";
import Card from "../Card/Card";

const CardGroup = () => {
  // Random Products
  const products = [
    { id: 1, name: "Laptop Pro", price: 5000 },
    { id: 2, name: "I Phone 12 pro Max", price: 10000 },
    { id: 3, name: "Mouse", price: 650 },
  ];
  return (
    <div>
      <h1>This is my Cards </h1>
      <div className="card-group">
        {products.map((product) => (
          <Card key={product.id} products={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
