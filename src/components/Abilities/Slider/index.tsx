import './index.less';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export function SimpleSlider() {
    let settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (

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
    );
}