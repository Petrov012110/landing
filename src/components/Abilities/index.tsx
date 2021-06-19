import './index.less'
import { SimpleSlider } from './Slider'


export const SliderSection = () => {
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
                    <SimpleSlider />
                </div>
            </div>
        </div>
    </div>
    )
}