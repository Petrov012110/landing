import React from 'react';
import './index.less';

const glasses = require("../../../assets/images/glasses.svg");
const note = require("../../../assets/images/note.svg");
const search = require("../../../assets/images/search.svg");

const Advantages = () => {
    return (
        <div className="props" id="props">
            <div className="container">
                <div className="props__inner">
                    <div className="props__title">
                        <span>
                            C нашим сервисом
                            вы сможете
                        </span>
                    </div>
                    <div className="props__content">
                        <div className="card">
                            <div className="card__circle glasses">
                                <img alt="" src={glasses?.default} />
                            </div>
                            <div className="card__title">
                                Найти все объявления в одном месте
                            </div>
                            <div className="card__subtitle">
                                Больше нет нужды следить за обновлениями разных групп
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__circle search">
                                <img alt="" src={search?.default} />
                            </div>
                            <div className="card__title">
                                Экономить время на поиски нужной вещи
                            </div>
                            <div className="card__subtitle">
                                Настройте фильтр и смотрите только подходящии объявления
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__circle note">
                                <img alt="" src={note?.default} />
                            </div>
                            <div className="card__title">
                                Сохранить объявления в избранном
                            </div>
                            <div className="card__subtitle">
                                Добавьте объявление в избранное и вернитесь к нему в любое время
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export { Advantages };
