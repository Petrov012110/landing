import ReactDOM from 'react-dom';
import { Turn as Hamburger } from 'hamburger-react'
import './index.less';
import { useState } from 'react';

const logo = require('../../assets/images/12.png');

const Header = () => {

    const [isOpen, setOpen] = useState(false)
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <a href="#">
                            <img className="logo-header" src={logo?.default} alt="logo" />
                        </a>
                    </div>
                    <div className="headr__nav">
                        <nav className="menu">
                            <ul className="menu_list">
                                <li className="active">
                                    <a href="#">Поиск</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="header__login">
                            <a href="" className="header__btn">Войти</a>
                            <a href="" className="header__btn-registration">Регистрация</a>
                        </div>
                    </div>
                    <div className="burger-menu">
                        <Hamburger 
                            toggled={isOpen} 
                            toggle={setOpen}
                            onToggle={toggled => {
                                if (toggled) {
                                   
                                } else {
                                   // close a menu
                                }
                              }} />
                    </div>
                </div>
            </div>
        </header>
    )

}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);

export default Header