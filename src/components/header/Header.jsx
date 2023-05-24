import React from "react";
import zj from "../../assets/images/zj.png";
import "./header.css";
import { User } from "./User";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";
import DarkMode from "../../DarkMode/DarkMode";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  return (
    <>
      <div>
        <header className="header">
          <div className="scontainer flex">
            <div className="logo">
              <img src={zj} alt="logo" width="50px" />
            </div>
            <nav>
              <ul>
                {nav.map((link) => (
                  <li key={link.id}>
                    <Link to={link.url}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="account flexCenter">
              <DarkMode />
              <User />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
