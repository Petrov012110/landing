import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import { useForm } from "react-hook-form";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less';

export type SignInFormProps = {
    onForgotClick?: () => void;
    onRegisterClick?: () => void;
};

type FormData = {
    login: string;
    password: string;
};


export const SignInForm: React.FC<SignInFormProps> = ({ onForgotClick, onRegisterClick }) => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
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

                    <Button className="login-form-forgot" type="link" onClick={() => onForgotClick?.()}>
                        Forgot password
                    </Button>
                </div>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or
                <Button type="link" onClick={() => onRegisterClick?.()}>
                    register now!
                </Button>
            </Form.Item>
        </Form>
    );
}