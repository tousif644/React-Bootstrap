import React from "react";
import { CardGroup } from "react-bootstrap";
import Card2 from "../Card2/Card2";

const CardGroup2 = () => {
  const products = [
    { id: 1, name: "Laptop Pro", price: 5000 },
    { id: 2, name: "I Phone 12 pro Max", price: 10000 },
    { id: 3, name: "Mouse", price: 650 },
  ];
  return (
    <div>
      <CardGroup>
        {products.map((product) => (
          <Card2 key={product.id} products={product}></Card2>
        ))}
      </CardGroup>
    </div>
  );
};

export default CardGroup2;
