import { ArrowRightOutlined } from '@ant-design/icons';
import './index.less';

const banner = require("../../../assets/images/Frame.png");
const bannerSmall = require("../../../assets/images/Frame9.png");
const bannerSmall95 = require("../../../assets/images/Frame95.png");
const bannerSmall8 = require("../../../assets/images/Frame8.png");
const bannerSmall75 = require("../../../assets/images/Frame75.png");
const bannerSmall65 = require("../../../assets/images/Frame65.png");
const bannerSmall5 = require("../../../assets/images/Frame5.png");
const bannerSmall45 = require("../../../assets/images/Frame45.png");

const Introduction = () => {

    return (
        <div className="introduction">
            <div className="container nopadding">
                <div className="introduction__inner">
                    <div className="introduction__wrapper">
                        <div className="information">
                            <div className="title">
                                <span>
                                    Все объявления в одном месте
                                </span>
                            </div>
                            <div className="subtitle">
                                <span>
                                    Больше не нужно мониторить сообщества в поисках нужной вещи, Get Offers делает это за вас
                                </span>
                            </div>
                            <div className="btn-search">
                                <button>
                                    <div className="btn__name">Начать поиск</div>
                                    <div className="circle">
                                        <ArrowRightOutlined />
                                    </div>
                                </button>
                            </div>
                        </div>
                    <img className="banner" alt="" src={banner?.default} />
                    <img className="bannerSmall" alt="" src={bannerSmall?.default} />
                    <img className="bannerSmall95" alt="" src={bannerSmall95?.default} />
                    <img className="bannerSmall8" alt="" src={bannerSmall8?.default} />
                    <img className="bannerSmall75" alt="" src={bannerSmall75?.default} />
                    <img className="bannerSmall65" alt="" src={bannerSmall65?.default} />
                    <img className="bannerSmall5" alt="" src={bannerSmall5?.default} />
                    <img className="bannerSmall45" alt="" src={bannerSmall45?.default} />
                    </div>


                </div>
            </div>
        </div>
    )

}



export default Introduction