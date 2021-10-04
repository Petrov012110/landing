import './index.less'
import { ImVk, ImTelegram } from "react-icons/im";
// const logo = require('../../assets/images/11.png');
const vk = require('../../assets/images/vk.svg');
const istagram = require('../../assets/images/instagram.svg');
const logo = require("../../assets/images/lable.svg");

export const Fooret = () => {
    return (
        <div className="footer" id="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__title">
                        Контакты
                    </div>
                    <div className="contacts">
                        <div className="contact-column">
                            <div className="contact-row">
                                <a href="">
                                    <div>
                                        <img className="vk" alt="" src={vk?.default} />
                                    </div>
                                    <span>vkontakte</span>
                                </a>
                            </div>
                            <div className="contact-row">
                                <a href="">
                                    <div>
                                        <img className="istagram" alt="" src={istagram?.default} />
                                    </div>
                                    <span>istagram</span>
                                </a>
                            </div>
                        </div>
                        <div className="contact-column">
                            <div className="contact-link">
                                <span>Почта</span>
                                <div>
                                    <a className="footer__info" href="mail:get.offers@yandex.ru.com">
                                        get.offers@yandex.ru
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-column">
                            <div className="contact-link">
                                <span>Адрес</span>
                                <div className="footer__info">
                                    202 New Hampshire Avenue
                                    Northwest #100, New York-2573
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="logo">
                        <a href="#">
                            <img src={logo?.default} alt="logo" />
                            <span className="logotype-footer">GetOffers</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}