import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from 'react-icons/hi';

const Header = (cartItems) => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/vishal-challenge" className="logo">
          Food's Restaurant
          <img src='' />
          </Link>
        </h1>
      </div>
      {/* <div className="header-links">
        <ul>
          <li>
            <Link to="/GoToMenu">Home</Link>
          </li>
          <li>
            <Link to="/GoToMenu">About</Link>
          </li>
          <li>
            <Link to="/GoToMenu">Contact</Link>
          </li>
        </ul>
      </div> */}
      <div>
        <Link to='/vishal-challenge/cart'>
          <HiOutlineShoppingCart size={"2em"} cursor={"pointer"} color={"white"}/>
        <span className="cart-length">
          {cartItems.length === 0 ? "" : cartItems.length}
        </span>
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
