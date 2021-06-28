import './index.less';

const Introduction = () => {

    return (
        <div className="introduction">
            <div className="container">
                <div className="introduction__inner">
                    <div className="introduction__text">
                        <p className="title">
                            <span>
                                Сервис, который собирает все офферы в одном месте
                        </span>
                        </p>
                        <p className="subtitle">
                            Не нужно тратить драгоценное время на поиск нужного айтема, сервис get.offets <br /> сделал это уже за вас,
                        просто настройте фильтр и получите<br /> готвый результат в таблицу.
                    </p>
                        <div className="btn__registration">
                            <a href="#">Регистрация</a>
                        </div>
                    </div>
                    <div className="introduction__banner">

                    </div>
                </div>
            </div>
        </div>
    )

}



export default Introduction