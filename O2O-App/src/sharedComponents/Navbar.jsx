import React from "react";
import "../Style/Style.css";
import { MdNotificationsActive } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { TfiWorld } from "react-icons/tfi";

const Navbar = ({ userName }) => {
  return (
    <div className="headContainer">
      <div className="userName">
        <h2>أهلآ {userName}</h2>{" "}
      </div>

      <div className="headericons">
        <button className="button">
          <div viewBox="0 0 448 512" class="bell">
            <BiSearch />
          </div>
        </button>

        <button className="button">
          <div viewBox="0 0 448 512" class="bell">
            <MdNotificationsActive />
          </div>
        </button>

        <button className="button">
          <div viewBox="0 0 448 512" class="bell">
            <TfiWorld />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
