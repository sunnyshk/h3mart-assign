import React from "react";
import "../Styles/Nav.css"
import { FaSearch  } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="nav-div">
      <ul className="u-list">
        <li>
          <a href="#">Coins</a>
        </li>
        <li>
          <a href="#">Exchanges</a>
        </li>
        <li>
          <a href="#">Swap</a>
        </li>
      </ul>
      <img src="https://coincap.io/static/logos/black.svg" alt="logo" />

      <div className="nav-right">
        <FaSearch />
        <AiFillSetting />
        <button>Connect Wallet</button>
      </div>
    </div>
  );
};

export default Navbar;
