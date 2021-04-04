import React, { useCallback, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import useInput from '../hooks/useInput';

const LoginForm = () => {
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(() => {
        console.log(email, password);
        // dispatch(loginRequestAction({ email, password }));
    }, [email, password]);

    return (
        <Form
        name="normal_login"
        className="login-form"
        style={{maxWidth: '300px'}}
        initialValues={{ remember: true }}
        onFinish={onSubmitForm}
        >
        <div>
            <img style={{maxWidth:'300px'}} src='/images/logo.jpg' />
        </div>
        <Form.Item
            name="user-email"
            rules={[{ required: true, message: 'Please input your Username!' }]}
        >
            <Input 
                prefix={<UserOutlined className="site-form-item-icon" />} 
                type="email" 
                placeholder="Email"
                name="user-email"  
                value={email} 
                onChange={onChangeEmail} 
                required    
            />
        </Form.Item>
        <Form.Item
            name="user-password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
        >
            <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            name="user-password"
            value={password}
            onChange={onChangePassword}
            required
            />
        </Form.Item>
        <Form.Item>
            <Button 
                style={{width: '100%'}} 
                type="primary" 
                htmlType="submit" 
                className="login-form-button"
            >
            Log in
            </Button>
        </Form.Item>
        </Form>
    );
};

export default LoginForm;