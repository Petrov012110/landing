import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Fade as Hamburger } from "hamburger-react";
import { SearchOutlined } from "@ant-design/icons";

const logo = require("../../assets/images/lable.svg");

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
        // customBurgerIcon={<Hamburger size={28} color="#FFF" toggled={isMenuOpen} />}
        // onClose={ handleOnClose } 
        // onOpen={() => setIsMenuOpen(true)}
        // onClose={() => setIsMenuOpen(false)}
        >
            <div className="navigation-burger">
                <div className="logo">
                    <a href="#">
                        <img src={logo?.default} alt="logo" />
                        <span className="logotype">GetOffers</span>
                    </a>
                </div>
                <div className="navigation">
                    <ul>
                        <li>
                            <a href="#abilities">Преимущества</a>
                        </li>
                        <li>
                            <a href="#carousel">Принцип работы</a>
                        </li>
                        <li>
                            <a href="#props">Возможности</a>
                        </li>
                        <li>
                            <a href="#description">О сервисе</a>
                        </li>
                        <li>
                            <a href="#footer">Контакты</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="buttons-burger">
                <div className="search__btn">
                    <button>
                        <SearchOutlined />
                        <span className="btn__name">Найти</span>
                    </button>
                </div>
                <div className="registration__btn">
                    <button>Регистрация</button>
                </div>
            </div>



        </Menu>
    );
};
