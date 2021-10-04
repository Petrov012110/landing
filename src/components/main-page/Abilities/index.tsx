import './index.less'

const phone = require("../../../assets/images/phone.png");
const themarket = require("../../../assets/images/Group.png");
const checkboxes = require("../../../assets/images/checkboxes.png");
const groups = require("../../../assets/images/groups.png");
const phoneSmall = require("../../../assets/images/phoneSmall.png");
const themarketSmall = require("../../../assets/images/GroupSmall.png");
const checkboxesSmall = require("../../../assets/images/checkboxesSmall.png");
const groupsSmall = require("../../../assets/images/groupsSmall.png");


export const AbilitiesSection = () => {

    return (
        <div className="abilities" id="abilities">
            <div className="container">
                <div className="abilities__inner">
                    <div className="abilities__header">
                        <div className="abilities__header-title">
                            С нами удобно
                        </div>
                        <div className="abilities__header-subtitle">
                            Get Offers — ваш помощник в поиске вещей в бесконечном потоке объявлений
                        </div>
                    </div>
                    <div className="abilities__content">
                        <div className="column">
                            <div className="block normal">
                                <div className="block__title">
                                    Можно пользоваться
                                    с телефона
                                </div>
                                <div className="block__subtitle">
                                    Следите за новыми публикациями,
                                    где бы вы не находились
                                </div>
                                <img className="phone__img" src={phone?.default} alt="phone" />
                                <img className="phoneSmall__img" src={phoneSmall?.default} alt="phoneSmall" />
                            </div>
                            <div className="block small">
                                <div className="block__title">
                                    Гибкий фильтр
                                </div>
                                <div className="block__subtitle">
                                    Отфильтровав по группе, бренду или модели, вы быстрее найдете нужный товар
                                </div>
                                <img className="checkboxes__img" src={checkboxes?.default} alt="checkboxes" />
                                <img className="checkboxesSmall__img" src={checkboxesSmall?.default} alt="checkboxesSmall" />

                            </div>
                        </div>
                        <div className="column">
                            <div className="block small">
                                <div className="block__title">
                                    Старые объявления не потеряются
                                </div>
                                <div className="block__subtitle">
                                    Сервис повышает просмотры и не дает затеряться актуальным постам
                                </div>
                                <img className="themarket__img" src={themarket?.default} alt="themarket" />
                                <img className="themarketSmall__img" src={themarketSmall?.default} alt="themarketSmall" />
                            </div>
                            <div className="block normal">
                                <div className="block__title">
                                    Non-stop парсинг
                                </div>
                                <div className="block__subtitle">
                                    В режиме реального времени сервис собирает и выводит все актуальные объявления
                                </div>
                                <img className="groups__img" src={groups?.default} alt="groups" />
                                <img className="groupsSmall__img" src={groupsSmall?.default} alt="groupsSmall" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}