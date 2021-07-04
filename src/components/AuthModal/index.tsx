import { Modal } from 'antd';
import React, { useState, useMemo, useEffect } from 'react';
import { SignInForm } from '../SignInForm';

export type FormType = 'signIn' | 'signUp' | 'forgot'

export type AuthFormProps = {
  visible: boolean;
  onChangeVisible?: (visible: boolean) => void;
}

const Form: React.FC<{
  activeForm: FormType;
  onChangeActiveForm?: (form: FormType) => void;
}>= ({activeForm, onChangeActiveForm}) => {

  if (activeForm === 'signIn') {
    return (
      <SignInForm
        onForgotClick={() => onChangeActiveForm?.('forgot')}
        onRegisterClick={() => onChangeActiveForm?.('signUp')}
      />
    );
  } else if (activeForm === 'signUp') {
    return null;
  } else if (activeForm === 'forgot') {
    return null;
  } else return null;
};

export const AuthModal: React.FC<AuthFormProps> = ({ visible, onChangeVisible }) => {
  const [title, setTitle] = useState('Вход');
  const [activeForm, setActiveForm] = useState<FormType>('signIn');
  const handleOk = () => { };
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleOk}
      centered={true}
      onCancel={() => {
        setActiveForm('signIn');
        onChangeVisible?.(!visible);
      }}
      footer={null}
    >
      <Form activeForm={activeForm} onChangeActiveForm={setActiveForm} />
    </Modal>
  );
};