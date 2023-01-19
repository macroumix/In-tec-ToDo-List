import React from "react";

import "./Navbar.css";
import ShoppingCart from "./ShoppingCart";
import homeButton from "../Images/home.png";
import blackHomeButton from "../Images/home-black.png";

const Navbar = ({ totalNumberOfOrder, hasCartItems, isCartVisible, setIsCartVisible }) => {
  const homeVisibilityHandler = () => {
    setIsCartVisible(false);
  };

  return (
    <div id="navbar">
      <div onClick={homeVisibilityHandler} id="store-id">
        <p>UMIX</p>
      </div>
      <div>
        
      </div>
        <ShoppingCart
        totalNumberOfOrder={totalNumberOfOrder}
          hasCartItems={hasCartItems}
          isCartVisible={isCartVisible}
          setIsCartVisible={setIsCartVisible}
        />
      <div>
        <img
          onClick={homeVisibilityHandler}
          id="home-button"
          src={isCartVisible? homeButton : blackHomeButton}
          alt="home-button"
        />
      </div>
    </div>
  );
};

export default Navbar;
