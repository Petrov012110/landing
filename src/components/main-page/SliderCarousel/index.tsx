import './index.less'
import AppendDots from './SliderMain';
// import {Carousel} from '3d-react-carousal';
let Carousel = require('3d-react-carousal').Carousel;


const brands = require('../../../assets/images/brands.png');
const groups = require('../../../assets/images/sliderGroup.png');
const offers = require('../../../assets/images/offers.png');
const loginForm = require('../../../assets/images/loginForm.png');
const brands85 = require('../../../assets/images/brands85.png');
const groups85 = require('../../../assets/images/sliderGroup85.png');
const offers85 = require('../../../assets/images/offers85.png');
const loginForm85 = require('../../../assets/images/loginForm85.png');
const brands8 = require('../../../assets/images/brands8.png');
const groups8 = require('../../../assets/images/sliderGroup8.png');
const offers8 = require('../../../assets/images/offers8.png');
const loginForm8 = require('../../../assets/images/loginForm8.png');


export const Slider = () => {
    // let slides = [
    //     <div className="slider-item">
    //         <div className="wrapp">
    //             <div className="slider__content">
    //                 <div className="slider__title">
    //                     Зарегистрируйтесь
    //                 </div>
    //                 <div className="slider__text">
    //                     Создайте свой личный кабинет, чтобы пользоваться всеми возможностями сервиса
    //                 </div>
    //             </div>
    //             <img className="slider-img" src={loginForm?.default} alt="loginForm" />
    //             <img className="slider-img85" src={loginForm85?.default} alt="loginForm85" />
    //             <img className="slider-img8" src={loginForm8?.default} alt="loginForm8" />
    //         </div>
    //     </div>,
    //     <div className="slider-item">
    //         <div className="wrapp">
    //             <div className="slider__content">
    //                 <div className="slider__title">
    //                     Выбрать брэнд или модель
    //                 </div>
    //                 <div className="slider__text">
    //                     Выбериту нужный вам брендили модель, чтобы ускорить поиск нужного товара
    //                 </div>
    //             </div>
    //             <img className="slider-img" src={brands?.default} alt="brands" />
    //             <img className="slider-img85" src={brands85?.default} alt="brands85" />
    //             <img className="slider-img8" src={brands8?.default} alt="brands8" />
    //         </div>
    //     </div>,
    //     <div className="slider-item">
    //         <div className="wrapp">
    //             <div className="slider__content">
    //                 <div className="slider__title">
    //                     Выбрать группу
    //                 </div>
    //                 <div className="slider__text">
    //                     Групп становится все больше, но вы можете сузить поиск выбрав свои любимые группы
    //                 </div>
    //             </div>
    //             <img className="slider-img" src={groups?.default} alt="groups" />
    //             <img className="slider-img85" src={groups85?.default} alt="groups85" />
    //             <img className="slider-img8" src={groups8?.default} alt="groups8" />
    //         </div>
    //     </div>,

    //     <div className="slider-item">
    //         <div className="wrapp">
    //             <div className="slider__content">
    //                 <div className="slider__title">
    //                     Смотреть все офферы
    //                 </div>
    //                 <div className="slider__text">
    //                     Готово! Все подходящие посты собраны в одном месте и вы не потратили на поиски пол дня
    //                 </div>
    //             </div>
    //             <img className="slider-img" src={offers?.default} alt="offers" />
    //             <img className="slider-img85" src={offers85?.default} alt="offers85" />
    //             <img className="slider-img8" src={offers8?.default} alt="offers8" />
    //         </div>
    //     </div>];

    return (

        <div className="carousel" id="carousel">
            <div className="container">
                <div className="carousel__title">
                    <span>
                        Поиск в пару кликов
                    </span>
                </div>
            </div>
                <div className="carousel__inner">
                    {/* <Carousel slides={slides} autoplay={false} interval={0} /> */}
                    <AppendDots />
                </div>
        </div>
    )
}