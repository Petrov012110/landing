import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import { useForm } from "react-hook-form";
import './index.less';

type FormData = {
    login: string;
    password: string;
};


export const MultipleInputs = () => {


    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));
    // firstName and lastName will have correct type

    return (
        <div className="login-form">
            <form onSubmit={onSubmit}>
                <button
                    className="btn-out"
                    type="button"
                    onClick={() => {

                    }}
                >
                    <CloseOutlined />
                </button>
                <div className="login-form__title">Вход</div>
                <label>Логин</label>
                <input {...register("login")} />
                <label>Пароль</label>
                <input placeholder="Введите пароль" {...register("password")} />
                <button
                    className="btn"
                    type="button"
                    onClick={() => {

                    }}
                >
                    Войти
                </button>
                <div className="login-form__recovery">
                    <a href="#">
                        Забыли логин или пароль?
                    </a>
                </div>
                <div className="login-form__recovery">
                    <a href="#">
                        Регистрация
                    </a>
                </div>
            </form>
        </div>
    );
}