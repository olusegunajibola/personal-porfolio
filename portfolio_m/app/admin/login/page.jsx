'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, message } from 'antd';

export default function Login() {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = (values) => {
    if (values.username === 'admin' && values.password === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/admin/dashboard');
    } else {
      message.error('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Portfolio Admin Login</h1>
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
