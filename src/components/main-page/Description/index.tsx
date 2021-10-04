import './index.less';

const about = require("../../../assets/images/about.png");
const about9 = require("../../../assets/images/about9.png");
const about75 = require("../../../assets/images/about75.png");
const about8 = require("../../../assets/images/about8.png");

export const Description = () => {
    return (
        <div className="description" id="description">
            <div className="container">
                <div className="description__inner">
                    <div className="description__wraper">
                        <img className="about posit" alt="" src={about?.default} />
                        <img className="about9 posit" alt="" src={about9?.default} />
                        <img className="about75 posit" alt="" src={about75?.default} />
                        <img className="about8 posit" alt="" src={about8?.default} />
                        <div className="description__wraper-inner">
                            <div className="props__title">
                                <span>
                                    О Get Offers
                                </span>
                            </div>
                            <div className="text">
                                <p>
                                    Многие пользователи просматривают ленту VK и Instagram в поисках нужной им вещи. Это не сложно, но на то, чтобы найти что-то подходящее, уходит много времени.
                                </p>
                                <p>
                                    Групп становится все больше, каждую минуту появляются новые посты, а те, что были опубликованы ранее, уже мало кто просматривает. Для решения этих проблем и был создан сервис Get Offers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}