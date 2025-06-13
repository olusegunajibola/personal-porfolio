"use client";
import { useState, useEffect } from "react";
import MainLayout from "@/components/layout";
import { Card, Row, Col } from "antd";
import moment from "moment";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const savedBlogs = localStorage.getItem("blogs");
    if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <section id="blog" className="my-8">
          <h2 className="text-3xl font-bold text-center mb-6">Blog</h2>
          <Row gutter={[16, 16]}>
            {blogs.map((blog, index) => (
              <Col key={index} xs={24} sm={12} lg={8}>
                <Card
                  key={index}
                  className="flex flex-col h-full bg-[var(--card-bg-color)] border border-[var(--border-color)]"
                  title={blog.title}
                  variant={false}
                >
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover mb-4"
                    />
                  )}
                  <div className="flex-1">
                    <p className="text-gray-700 dark:text-gray-200">
                      {blog.content}
                    </p>
                  </div>

                  <p className="mt-auto pt-4 text-sm text-gray-500 dark:text-gray-300">
                    {moment(blog.date).format("h:mm A · MMM D, YYYY")}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </div>
    </MainLayout>
  );
}
