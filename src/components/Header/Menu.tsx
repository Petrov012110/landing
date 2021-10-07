import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Fade as Hamburger } from "hamburger-react";

export const MenuBurger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const showSettings = (event: any) => {
    event.preventDefault();
  };

  return (
    <Menu
      right
      // noOverlay
      // disableOverlayClick
      id={"sidebar"}
      isOpen={isMenuOpen}
      customBurgerIcon={<Hamburger toggled={isMenuOpen} />}
      onOpen={() => setIsMenuOpen(true)}
      onClose={() => setIsMenuOpen(false)}
    >
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a onClick={showSettings} className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};
