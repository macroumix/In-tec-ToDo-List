import React from "react";

import "./ShoppingCart.css";
import 'animate.css';
import shoppingCartEmpty from "../Images/shopping-cart-empty.png";
import shoppingCartFull from "../Images/-shopping-cart-full.png";

const ShoppingCart = ({ totalNumberOfOrder, hasCartItems, isCartVisible, setIsCartVisible }) => {
  const shoppingCartVisibilityHandler = () => {
    setIsCartVisible(true);
  };

  return (
    <div onClick={shoppingCartVisibilityHandler} id="shopping-cart">
      <img id="shopping-cart-logo" src={isCartVisible ? shoppingCartFull : shoppingCartEmpty} alt="Shopping Cart Empty Logo"/>
      <p className="animate__animated animate__flash">{totalNumberOfOrder}</p>
      </div>
  );
};

export default ShoppingCart;
