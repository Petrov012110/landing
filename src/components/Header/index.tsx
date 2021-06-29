import ReactDOM from "react-dom";
import { Sling, Turn as Hamburger } from "hamburger-react";
import "./index.less";
import { Menu } from "./Menu";
import React, { useState } from "react";
import { Button, Dropdown } from "antd";

const logo = require("../../assets/images/12.png");

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <a href="#">
                            {/* <img className="logo-header" src={logo?.default} alt="logo" /> */}
                        </a>
                    </div>
                    <div className="menu-web">
                        <Menu className="web"  mode="horizontal" />
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
                </div>
            </div>
        </header>
    );
};

ReactDOM.render(<Header />, document.getElementById("root"));

export default Header;
