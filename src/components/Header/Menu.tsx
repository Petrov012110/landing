import { MenuFoldOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { slide as Menu } from 'react-burger-menu'



export const MenuBurger = () => {

  const showSettings = (event: any) => {
    event.preventDefault();
  }

  return (
    <Menu id={ "sidebar" } customBurgerIcon={ <MenuFoldOutlined /> }>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
      <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
    </Menu>
  );
};
