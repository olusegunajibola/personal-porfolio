// // pages/index.jsx
// import { useState, useEffect } from 'react';
// import MainLayout from '@/components/layout';
// import { Card, Row, Col } from 'antd';
// import moment from 'moment';

// export default function Home() {
//   const [blogs, setBlogs] = useState([]);
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const savedBlogs = localStorage.getItem('blogs');
//     const savedMessages = localStorage.getItem('messages');

//     if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
//     if (savedMessages) setMessages(JSON.parse(savedMessages));
//   }, []);

//   return (
//     <MainLayout>
//       <div className="container mx-auto p-4">
//         <Row gutter={16}>
//           <Col span={8}>
//             <Card bordered={false} className="bg-blue-50 dark:bg-gray-800">
//               <p className="text-gray-500 dark:text-gray-300">Total Blogs</p>
//               <p className="text-3xl font-bold">{blogs.length}</p>
//             </Card>
//           </Col>
//           <Col span={8}>
//             <Card bordered={false} className="bg-green-50 dark:bg-gray-800">
//               <p className="text-gray-500 dark:text-gray-300">Total Messages</p>
//               <p className="text-3xl font-bold">{messages.length}</p>
//             </Card>
//           </Col>
//           <Col span={8}>
//             <Card bordered={false} className="bg-purple-50 dark:bg-gray-800">
//               <p className="text-gray-500 dark:text-gray-300">Last Updated</p>
//               <p className="text-3xl font-bold">{blogs.length > 0 ? moment(blogs[0].date).fromNow() : 'N/A'}</p>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </MainLayout>
//   );
// }
