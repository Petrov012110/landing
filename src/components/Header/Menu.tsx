import React from "react";
import { Menu as AntMenu, MenuProps as AntMenuProps } from "antd";
import "antd/dist/antd.css";

export type MenuProps = Pick<AntMenuProps, "mode" | "className">;

export const Menu: React.FC<MenuProps> = ({ ...props }) => {
  return (
    <AntMenu className="" {...props}>
      <AntMenu.Item>
        <a href="#">Поиск</a>
      </AntMenu.Item>
      <AntMenu.Item>
        <a href="">Войти</a>
      </AntMenu.Item>
      <AntMenu.Item>
        <a href="">Регистрация</a>
      </AntMenu.Item>
    </AntMenu>
  );
};
