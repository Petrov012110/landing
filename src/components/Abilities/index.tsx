import './index.less'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const SliderSection = () => {
    let settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (
        <div className="slider">
            <div className="container">
                <div className="slider__inner">
                    <div className="slider__title">
                        <p>
                            С сервисом get.offers вы сможете:
                        </p>
                    </div>
                    <div className="slider__content">
                        <Slider {...settings}>
                            <div>
                                <div className="slide">
                                    <div className="slider__text">
                                        <p>
                                            Быстро найти нужный вам айтем
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slide">
                                    <div className="slider__text">
                                        <p>
                                            Сохранить понравившееся предложение и <br />вернуться к нему в любое время
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slide">
                                    <div className="slider__text">
                                        <p>
                                            Видеть посты, опубликованные более месяц назад,<br /> можно самому задать дату
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}