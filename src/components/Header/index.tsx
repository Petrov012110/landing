import ReactDOM from "react-dom";
import { Sling, Turn as Hamburger } from "hamburger-react";
import "./index.less";
import { MenuBurger } from "./Menu";
import React, { useState } from "react";
import { Button, Dropdown } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const logo = require("../../assets/images/lable.svg");
const iconSearch = require("../../assets/images/searchIcon.svg");

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="aside">
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
                    <div className="bside">
                        {/* <div className="burger">
                            <MenuBurger />
                        </div> */}

                        <div className="search__btn">
                            <button>
                                <SearchOutlined />
                                <span className="btn__name">
                                    Найти
                                </span>
                            </button>
                        </div>
                        <div className="registration__btn">
                            <button>Регистрация</button>
                        </div>
                    </div>
                    {/* <div className="header__inner-bside">
                        <div className="menu-web">
                            <Menu className="web" mode="horizontal" />
                        </div>
                        <div className="burger-menu">
                            <Dropdown
                                className="my-menu-button"
                                overlay={() => <Menu mode="vertical" />}
                                visible={menuOpen}
                                placement="bottomRight"
                                trigger={["click"]}
                                onVisibleChange={(visible) => setMenuOpen(visible)}
                            >
                                <Button type="link">
                                    <Sling toggled={menuOpen} />
                                </Button>
                            </Dropdown>
                        </div>
                    </div> */}
                </div>
            </div>
        </header>
    );
};

ReactDOM.render(<Header />, document.getElementById("root"));

export default Header;
