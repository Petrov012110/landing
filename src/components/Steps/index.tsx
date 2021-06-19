import './index.less'
const phone = require('../../assets/images/phone.png');
const phoneSmall = require('../../assets/images/phoneS.png');
export const Steps = () => {
    return (
        <div className="steps">
            <div className="container">
                <div className="steps__inner">
                    <div className="steps__content">
                        <div className="text__content">
                            <div className="title">
                                <p>
                                Работа в пару кликов:
                                </p>
                            </div>
                            <div className="steps__steps">
                                <div className="step">
                                    {/* <div className="pickture">
                                        <img src="" alt="" />
                                    </div> */}
                                    <div className="step__text">
                                        <p>Зарегистрироваться</p>
                                    </div>
                                </div>
                                <div className="step">
                                    {/* <div className="pickture">
                                        <img src="" alt="" />
                                    </div> */}
                                    <div className="step__text">
                                        <p>Выбрать брэнд или модель</p>
                                    </div>
                                </div>
                                <div className="step">
                                    {/* <div className="pickture">
                                        <img src="" alt="" />
                                    </div> */}
                                    <div className="step__text">
                                        <p>Выбрать группу</p>
                                    </div>
                                </div>
                                <div className="step">
                                    {/* <div className="pickture">
                                        <img src="" alt="" />
                                    </div> */}
                                    <div className="step__text">
                                        <p>Получить все офферы</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile_img">
                            <img className="mobile" src={phone?.default} alt="" />
                            <img className="mobile-small" src={phoneSmall?.default} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}