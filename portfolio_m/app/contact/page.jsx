'use client';
import { useState } from 'react';
import MainLayout from '@/components/layout';
import { Form, Input, Button, message } from 'antd';

const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
  const messages = JSON.parse(localStorage.getItem('messages')) || [];

  const now = new Date();
  const formattedDate = now.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).replace(',', ' ·'); // Inserts the dot separator

  const newMessage = {
    ...values,
    date: formattedDate
  };

  messages.push(newMessage);
  localStorage.setItem('messages', JSON.stringify(messages));
  message.success('Message sent successfully');
  form.resetFields();
};

  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <section id="contact" className="my-16 px-4">
  <div className="flex flex-col items-center">
    <h2 className="text-3xl font-semibold text-center mb-8">Contact</h2>
    <div className="w-full max-w-lg">
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md space-y-4"
      >
        <Form.Item
          name="name"
          label={<span className="text-base font-medium">Name</span>}
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input className="rounded-md" />
        </Form.Item>
        <Form.Item
          name="email"
          label={<span className="text-base font-medium">Email</span>}
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" className="rounded-md" />
        </Form.Item>
        <Form.Item
          name="subject"
          label={<span className="text-base font-medium">Subject</span>}
          rules={[{ required: true, message: 'Please input the subject!' }]}
        >
          <Input className="rounded-md" />
        </Form.Item>
        <Form.Item
          name="body"
          label={<span className="text-base font-medium">Message</span>}
          rules={[{ required: true, message: 'Please input your message!' }]}
        >
          <TextArea rows={4} className="rounded-md" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
</section>

      </div>
    </MainLayout>
  );
}
