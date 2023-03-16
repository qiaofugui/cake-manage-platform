import React, { useState } from 'react';
import { Button, Form, Input, Card, Row, Col, message } from 'antd';
import { useModel } from 'umi';
import { userLogin } from './../../api/user';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const { initialState, setInitialState } = useModel('@@initialState');

  const onFinish = (values) => {
    setLoading(true);
    userLogin(values).then((res) => {
      localStorage.setItem('userInfo', JSON.stringify(res.data));
      setInitialState({
        useState: {
          isLoading: true,
          userInfo: res.data,
        },
      });
      message.success('登录成功');
      setLoading(false);
      setTimeout(() => {
        // 触发路由切换
        window.location.href = '/';
      }, 1000);
    });
  };

  return (
    <Row style={{ height: '100vh', backgroundColor: '#f6f6f6' }} align="middle">
      <Col span={10} offset={7}>
        <Card title="登录" hoverable extra={<a href="#">注册</a>}>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{
              username: 'admin',
              password: 'qqqqqq',
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block loading={loading}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
