"use client";
import { useState, useEffect } from "react";
import MainLayout from "@/components/layout";
import { Card, Row, Col } from "antd";
import moment from "moment";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedBlogs = localStorage.getItem("blogs");
    const savedMessages = localStorage.getItem("messages");

    if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
    if (savedMessages) setMessages(JSON.parse(savedMessages));
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center h-64 space-y-4 px-4 text-center">
        <h1 className="text-4xl font-semibold">👋 Hi, I'm Olusegun Ajibola!</h1>
        <h2 className="text-2xl text-gray-700 dark:text-gray-300">
          A passionate software developer, data scientist and tech enthusiast.
        </h2>
        <h3 className="text-lg text-gray-600 dark:text-gray-300">
          🎯 FrontEnd Web Dev | Data Scientist | Machine Learning Engineer |
          Data Analyst
        </h3>
        <h3 className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to my personal portfolio! Here, you can explore my latest
          blogs and get in touch with me.
        </h3>
      </div>
    </MainLayout>
  );
}
