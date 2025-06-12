// 'use client'
// import { useEffect, useState } from 'react';
// import { Form, Input, Button, message } from 'antd';

// export default function Home() {
//   const [profile, setProfile] = useState({});
//   const [blogs, setBlogs] = useState([]);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     // Load data from localStorage
//     const savedProfile = localStorage.getItem('profile');
//     const savedBlogs = localStorage.getItem('blogs');

//     if (savedProfile) setProfile(JSON.parse(savedProfile));
//     if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
//   }, []);

//   const onFinish = (values) => {
//     const messages = JSON.parse(localStorage.getItem('messages')) || [];
//     const newMessage = {
//       ...values,
//       date: new Date().toISOString()
//     };
//     messages.push(newMessage);
//     localStorage.setItem('messages', JSON.stringify(messages));
//     message.success('Message sent successfully');
//     form.resetFields();
//   };

//   return (
//     <div className="p-8">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
//         <div className="mb-4">
//           <h2 className="text-xl font-bold">About Me</h2>
//           <p>{profile.about}</p>
//         </div>
//         <div>
//           <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
//           {blogs.map((blog, index) => (
//             <div key={index} className="mb-4 p-4 border rounded">
//               <h3 className="font-bold">{blog.title}</h3>
//               <p>{blog.content}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2 className="text-xl font-bold mb-4">Contact Us</h2>
//         <Form form={form} onFinish={onFinish}>
//           <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input your name!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name="subject" label="Subject" rules={[{ required: true, message: 'Please input the subject!' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name="body" label="Message" rules={[{ required: true, message: 'Please input your message!' }]}>
//             <Input.TextArea />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// }


// //updated minstral
// 'use client'
// import { useEffect, useState } from 'react';
// import { Form, Input, Button, message, Card, Row, Col } from 'antd';

// const { TextArea } = Input;

// export default function Home() {
//   const [profile, setProfile] = useState({});
//   const [blogs, setBlogs] = useState([]);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     // Load data from localStorage
//     const savedProfile = localStorage.getItem('profile');
//     const savedBlogs = localStorage.getItem('blogs');

//     if (savedProfile) setProfile(JSON.parse(savedProfile));
//     if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
//   }, []);

//   const onFinish = (values) => {
//     const messages = JSON.parse(localStorage.getItem('messages')) || [];
//     const newMessage = {
//       ...values,
//       date: new Date().toISOString()
//     };
//     messages.push(newMessage);
//     localStorage.setItem('messages', JSON.stringify(messages));
//     message.success('Message sent successfully');
//     form.resetFields();
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* About Section */}
//       <section id="about" className="my-8">
//         <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
//         <div className="flex flex-col items-center">
//           {profile.profileImage && (
//             <img
//               src={profile.profileImage}
//               alt="Profile"
//               className="w-32 h-32 rounded-full mb-4 object-cover"
//             />
//           )}
//           <h3 className="text-xl font-semibold">{profile.fullName}</h3>
//           <p className="text-gray-600">{profile.email}</p>
//           <p className="text-gray-600">{profile.phone}</p>
//           <p className="text-gray-600">{profile.country}</p>
//           <p className="mt-4 text-center max-w-lg">{profile.about}</p>
//         </div>
//       </section>

//       {/* Blog Section */}
//       <section id="blog" className="my-8">
//         <h2 className="text-3xl font-bold text-center mb-6">Blog</h2>
//         <Row gutter={[16, 16]}>
//           {blogs.map((blog, index) => (
//             <Col key={index} xs={24} sm={12} lg={8}>
//               <Card title={blog.title} className="h-full">
//                 {blog.image && (
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-48 object-cover mb-4"
//                   />
//                 )}
//                 <p>{blog.content}</p>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </section>

//       {/* Contact Us Section */}
//       <section id="contact" className="my-8">
//         <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
//         <Form
//           form={form}
//           onFinish={onFinish}
//           layout="vertical"
//           className="max-w-lg mx-auto"
//         >
//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[{ required: true, message: 'Please input your name!' }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[{ required: true, message: 'Please input your email!' }]}
//           >
//             <Input type="email" />
//           </Form.Item>
//           <Form.Item
//             name="subject"
//             label="Subject"
//             rules={[{ required: true, message: 'Please input the subject!' }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="body"
//             label="Message"
//             rules={[{ required: true, message: 'Please input your message!' }]}
//           >
//             <TextArea rows={4} />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" className="w-full">
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//       </section>
//     </div>
//   );
// }

//// fix image not showing

// 'use client'
// import { useEffect, useState } from 'react';
// import { Form, Input, Button, message, Card, Row, Col } from 'antd';

// const { TextArea } = Input;

// export default function Home() {
//   const [profile, setProfile] = useState({});
//   const [blogs, setBlogs] = useState([]);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     // Load data from localStorage
//     const savedProfile = localStorage.getItem('profile');
//     const savedBlogs = localStorage.getItem('blogs');

//     if (savedProfile) setProfile(JSON.parse(savedProfile));
//     if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
//   }, []);

//   const onFinish = (values) => {
//     const messages = JSON.parse(localStorage.getItem('messages')) || [];
//     const newMessage = {
//       ...values,
//       date: new Date().toISOString()
//     };
//     messages.push(newMessage);
//     localStorage.setItem('messages', JSON.stringify(messages));
//     message.success('Message sent successfully');
//     form.resetFields();
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* About Section */}
//       <section id="about" className="my-8">
//         <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
//         <div className="flex flex-col items-center">
//           {profile.profileImage && (
//             <img
//               src={profile.profileImage}
//               alt="Profile"
//               className="w-32 h-32 rounded-full mb-4 object-cover"
//             />
//           )}
//           <h3 className="text-xl font-semibold">{profile.fullName}</h3>
//           <p className="text-gray-600">{profile.email}</p>
//           <p className="text-gray-600">{profile.phone}</p>
//           <p className="text-gray-600">{profile.country}</p>
//           <p className="mt-4 text-center max-w-lg">{profile.about}</p>
//         </div>
//       </section>

//       {/* Blog Section */}
//       <section id="blog" className="my-8">
//         <h2 className="text-3xl font-bold text-center mb-6">Blog</h2>
//         <Row gutter={[16, 16]}>
//           {blogs.map((blog, index) => (
//             <Col key={index} xs={24} sm={12} lg={8}>
//               <Card title={blog.title} className="h-full">
//                 {blog.image && (
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-48 object-cover mb-4"
//                   />
//                 )}
//                 <p>{blog.content}</p>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </section>

//       {/* Contact Us Section */}
//       <section id="contact" className="my-8">
//         <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
//         <Form
//           form={form}
//           onFinish={onFinish}
//           layout="vertical"
//           className="max-w-lg mx-auto"
//         >
//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[{ required: true, message: 'Please input your name!' }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[{ required: true, message: 'Please input your email!' }]}
//           >
//             <Input type="email" />
//           </Form.Item>
//           <Form.Item
//             name="subject"
//             label="Subject"
//             rules={[{ required: true, message: 'Please input the subject!' }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="body"
//             label="Message"
//             rules={[{ required: true, message: 'Please input your message!' }]}
//           >
//             <TextArea rows={4} />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" className="w-full">
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//       </section>
//     </div>
//   );
// }

///////// update time and date for blog posts
// 'use client'
// import { useEffect, useState } from 'react';
// import { Form, Input, Button, message, Card, Row, Col } from 'antd';

// const { TextArea } = Input;

// export default function Home() {
//   const [profile, setProfile] = useState({});
//   const [blogs, setBlogs] = useState([]);
//   const [form] = Form.useForm();

//   useEffect(() => {
//     const savedProfile = localStorage.getItem('profile');
//     const savedBlogs = localStorage.getItem('blogs');

//     if (savedProfile) setProfile(JSON.parse(savedProfile));
//     if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
//   }, []);

//   const onFinish = (values) => {
//     const messages = JSON.parse(localStorage.getItem('messages')) || [];
//     const newMessage = {
//       ...values,
//       date: new Date().toISOString()
//     };
//     messages.push(newMessage);
//     localStorage.setItem('messages', JSON.stringify(messages));
//     message.success('Message sent successfully');
//     form.resetFields();
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <section id="about" className="my-8">
//         <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
//         <div className="flex flex-col items-center">
//           {profile.profileImage && (
//             <img
//               src={profile.profileImage}
//               alt="Profile"
//               className="w-32 h-32 rounded-full mb-4 object-cover"
//             />
//           )}
//           <h3 className="text-xl font-semibold">{profile.fullName}</h3>
//           <p className="text-gray-600">{profile.email}</p>
//           <p className="text-gray-600">{profile.phone}</p>
//           <p className="text-gray-600">{profile.country}</p>
//           <p className="mt-4 text-center max-w-lg">{profile.about}</p>
//         </div>
//       </section>

//       <section id="blog" className="my-8">
//         <h2 className="text-3xl font-bold text-center mb-6">Blog</h2>
//         <Row gutter={[16, 16]}>
//           {blogs.map((blog, index) => (
//             <Col key={index} xs={24} sm={12} lg={8}>
//               <Card title={blog.title} className="h-full">
//                 {blog.image && (
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-48 object-cover mb-4"
//                   />
//                 )}
//                 <p>{blog.content}</p>
//                 <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </section>

//       <section id="contact" className="my-8">
//         <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
//         <Form
//           form={form}
//           onFinish={onFinish}
//           layout="vertical"
//           className="max-w-lg mx-auto"
//         >
//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[{ required: true, message: 'Please input your name!' }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[{ required: true, message: 'Please input your email!' }]}
//           >
//             <Input type="email" />
//           </Form.Item>
//           <Form.Item
//             name="subject"
//             label="Subject"
//             rules={[{ required: true, message: 'Please input the subject!' }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="body"
//             label="Message"
//             rules={[{ required: true, message: 'Please input your message!' }]}
//           >
//             <TextArea rows={4} />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" className="w-full">
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//       </section>
//     </div>
//   );
// }


///// toggle light and dark mode
'use client'
import { useEffect, useState } from 'react';
import { Form, Input, Button, message, Card, Row, Col, Switch } from 'antd';
import { BulbOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export default function Home() {
  const [profile, setProfile] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [form] = Form.useForm();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem('profile');
    const savedBlogs = localStorage.getItem('blogs');
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';

    if (savedProfile) setProfile(JSON.parse(savedProfile));
    if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
    setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
    <div className="container mx-auto p-4" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
      <div className="flex justify-end mb-4">
        <Switch
          checkedChildren={<BulbOutlined />}
          unCheckedChildren={<BulbOutlined />}
          checked={darkMode}
          onChange={toggleDarkMode}
        />
      </div>

      <section id="about" className="my-8">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        <div className="flex flex-col items-center">
          {profile.profileImage && (
            <img
              src={profile.profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
          )}
          <h3 className="text-xl font-semibold">{profile.fullName}</h3>
          <p className="text-gray-600 dark:text-gray-300">{profile.email}</p>
          <p className="text-gray-600 dark:text-gray-300">{profile.phone}</p>
          <p className="text-gray-600 dark:text-gray-300">{profile.country}</p>
          <p className="mt-4 text-center max-w-lg">{profile.about}</p>
        </div>
      </section>

      <section id="blog" className="my-8">
        <h2 className="text-3xl font-bold text-center mb-6">Blog</h2>
        <Row gutter={[16, 16]}>
          {blogs.map((blog, index) => (
            <Col key={index} xs={24} sm={12} lg={8}>
              <Card title={blog.title} className="h-full" style={{ backgroundColor: 'var(--card-bg-color)', borderColor: 'var(--border-color)' }}>
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover mb-4"
                  />
                )}
                <p>{blog.content}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">{blog.date}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

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
  );
}
