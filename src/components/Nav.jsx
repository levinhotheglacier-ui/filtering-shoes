import React from "react";
import "/styles/nav.css";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
const Nav = ({ search, setSearch }) => {
  return (
    <div>
      <div className="parent">
        <input
          type="text"
          className="inp"
          placeholder="Enter the name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="icons">
          <FaRegHeart className="nav-icon" />
          <BsCart3 className="nav-icon" />
          <RiContactsLine className="nav-icon" />
        </div>
        <div className="hr"></div>
      </div>
    </div>
  );
};

export default Nav;
