import React from "react";

const ProductItem = ({ info }) => {
  const { id, productName, icon, price, inventory } = info;

  return <li key={id} {productName}/>;
};
