import React from "react";
import { Menu as AntMenu, MenuProps as AntMenuProps } from "antd";
import "antd/dist/antd.css";

export type MenuProps = Pick<AntMenuProps, "mode" | "className">;

export const Menu: React.FC<MenuProps> = ({ ...props }) => {
  return (
    <AntMenu className="go-menu" {...props}>
      <AntMenu.Item className="go-menu-item">
        <a href="/parser">Поиск</a>
      </AntMenu.Item>
      <AntMenu.Item className="go-menu-item">
        <a href="">Войти</a>
      </AntMenu.Item>
      <AntMenu.Item className="go-menu-item">
        <a href="">Регистрация</a>
      </AntMenu.Item>
    </AntMenu>
  );
};
