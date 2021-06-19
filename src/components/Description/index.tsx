import './index.less'

export const Description = () => {
    return (
        <div className="description">
            <div className="container">
                <div className="description__inner">
                    <div className="description__inner-image">
                        <img src="images/2501.png" alt="" />
                    </div>
                    <div className="description__inner-content">
                        <div className="title">
                            Принцип работы 
                        </div>
                        <p>
                            В основе сервиса get.offers лежит парсин групп вконтакте. Парсер в режиме non-stop мониторит рессел-группы и собирает посты.
                            Все полученные данные хранятся на сервере и ждут, когда полизователь запросит их. Чтобы сделать запрос, пользователю всего лишь нужно 
                            выбрать группу и модель или бренд. 
                        </p>
                        <p>
                            Для того чтобы было удобно работать с данными, сервис выводит их в таблицу, в которой данные можно фильтровать по 
                            цене, группе и дате.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}