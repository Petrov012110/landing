import React, { useState } from "react";
import { Menu as AntMenu, MenuProps as AntMenuProps, Modal } from "antd";
import "antd/dist/antd.css";
import { SignInForm } from "../SignInForm";
import { AuthModal } from "../AuthModal";

export type MenuProps = Pick<AntMenuProps, "mode" | "className">;

export const Menu: React.FC<MenuProps> = ({ ...props }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <AntMenu className="go-menu" {...props} activeKey={undefined}>
        <AntMenu.Item className="header__btn">
          <a href="/parser">Поиск</a>
        </AntMenu.Item>
        <AntMenu.Item className="header__btn" onClick={showModal}>
          <a href="#">Войти</a>
        </AntMenu.Item>
        {/* <AntMenu.Item className="header__btn-registration">
        <a href="">Регистрация</a>
      </AntMenu.Item> */}
      </AntMenu>
      <AuthModal visible={isModalVisible} onChangeVisible={setIsModalVisible} />
    </>

  );
};
