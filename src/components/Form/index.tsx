import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import { useForm } from "react-hook-form";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less';

type FormData = {
    login: string;
    password: string;
};


export const MultipleInputs = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <button className="btn-close">
                <CloseOutlined />
            </button>
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item >
                <div className="forgot-pass">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </div>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item>
        </Form>
    );

    // const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    // const onSubmit = handleSubmit(data => console.log(data));
    // // firstName and lastName will have correct type

    // return (
    //     <div className="login-form">
    //         <form onSubmit={onSubmit}>
    //             <button
    //                 className="btn-out"
    //                 type="button"
    //                 onClick={() => {

    //                 }}
    //             >
    //                 <CloseOutlined />
    //             </button>
    //             <div className="login-form__title">Вход</div>
    //             <label>Логин</label>
    //             <input {...register("login")} />
    //             <label>Пароль</label>
    //             <input placeholder="Введите пароль" {...register("password")} />
    //             <button
    //                 className="btn"
    //                 type="button"
    //                 onClick={() => {

    //                 }}
    //             >
    //                 Войти
    //             </button>
    //             <div className="login-form__recovery">
    //                 <a href="#">
    //                     Забыли логин или пароль?
    //                 </a>
    //             </div>
    //             <div className="login-form__recovery">
    //                 <a href="#">
    //                     Регистрация
    //                 </a>
    //             </div>
    //         </form>
    //     </div>
    // );
}