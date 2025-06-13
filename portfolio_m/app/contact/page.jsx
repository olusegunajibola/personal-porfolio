// pages/contact.js
'use client';
import { useState } from 'react';
import MainLayout from '@/components/layout';
import { Form, Input, Button, message } from 'antd';

const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const newMessage = {
      ...values,
      date: new Date().toISOString()
    };
    messages.push(newMessage);
    localStorage.setItem('messages', JSON.stringify(messages));
    message.success('Message sent successfully');
    form.resetFields();
  };

  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <section id="contact" className="my-8">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="max-w-lg mx-auto"
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              name="subject"
              label="Subject"
              rules={[{ required: true, message: 'Please input the subject!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="body"
              label="Message"
              rules={[{ required: true, message: 'Please input your message!' }]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    </MainLayout>
  );
}
