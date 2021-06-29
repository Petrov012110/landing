import './index.less'
import { ImVk, ImTelegram } from "react-icons/im";
const logo = require('../../assets/images/11.png');

export const Fooret = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__logo">
                        <a href="#">
                            {/* <img className="logo-footer" src={logo?.default} alt="logo" /> */}
                        </a>
                    </div>
                    <div className="footer__adress">
                        <div className="text">
                            г. Екатеринбург, Студенческая д. 80, <br /> оф. 202
                        </div>
                        {/* <div className="footer__btn">
                            <div className="btn">
                                <a href="#">Войти</a>
                            </div>
                            <div className="btn">
                                <a href="#">Регистрация</a>
                            </div>
                        </div> */}
                    </div>
                    <div className="rewies">
                        <a className="text" href="#">
                            <span>Отзывы</span>
                        </a>
                    </div>
                    <div className="footer__contacts">
                        <div className="text">
                            get.offers@yandex.ru
                        </div>
                        <div className="footer__social-networks">
                            <div className="vk">
                                <a href="#"><span><ImVk className="vk"/></span></a>
                            </div>
                            <div className="tg">
                                <a href="#"><span><ImTelegram className="tg"/></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}