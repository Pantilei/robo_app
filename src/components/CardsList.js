import React from "react";
import Card from "./Card";

const CardsList = ({ robots }) => {
  const robotsList = robots.map(item => {
    return (
      <Card key={item.id} name={item.name} email={item.email} id={item.id} />
    );
  });
  /* if (true) {
    throw new Error("Noooooooo............!");
  } */
  return <div>{robotsList}</div>;
};

export default CardsList;
