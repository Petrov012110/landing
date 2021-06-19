import React from 'react';
import './index.less';

const Advantages = () => {
  return (
    <div className="props">
      <div className="container">
        <div className="props__inner">
          <div className="props__title">
            <p>get.offers — удобный помощник</p>
          </div>
          <div className="props__content">
            <ul className="list">
              <li>
                <div className="prop">
                  <div className="prop__text">Доступны посты, опубликованные<br /> более месяца назад</div>
                  <div className="prop__image">
                    <img src="" alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="prop">
                  <div className="prop__text">Удобно работать с<br /> мобильного телефона</div>
                  <div className="prop__image">
                    <img src="" alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="prop">
                  <div className="prop__text">Гибкие настройки фильтра</div>
                  <div className="prop__image">
                    <img src="" alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div className="prop">
                  <div className="prop__text">Non-stop парсинг</div>
                  <div className="prop__image">
                    <img src="" alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="props__banner">
            <p className="props__banner-text">
              <span>Пару минут</span>, все рессел группы у вас в одном месте
                        </p>
          </div>
        </div>
      </div>
    </div>
  )

};

export { Advantages };
