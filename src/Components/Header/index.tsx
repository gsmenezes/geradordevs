import React, { useState } from "react";

import { ReactComponent as CloseMenu } from "../../assets/close.svg";
import { ReactComponent as MenuIcon } from "../../assets/hamburger.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./styles.css";

const Header: React.FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="/">
            <Logo className="logo" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/">Home</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/sobre-nos">Sobre</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/formacao">Formação</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </div>
      <div id="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};
export default Header;
