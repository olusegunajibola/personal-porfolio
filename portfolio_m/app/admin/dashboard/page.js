// 'use client'
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Button, message, Form, Input, Upload, Modal } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

// export default function Dashboard() {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [profile, setProfile] = useState({});
//   const [blogs, setBlogs] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [form] = Form.useForm();
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   useEffect(() => {
//     const auth = localStorage.getItem('isAuthenticated');
//     if (auth !== 'true') {
//       router.push('/admin/login');
//     } else {
//       setIsAuthenticated(true);
//       // Load data from localStorage
//       const savedProfile = localStorage.getItem('profile');
//       const savedBlogs = localStorage.getItem('blogs');
//       const savedMessages = localStorage.getItem('messages');

//       if (savedProfile) setProfile(JSON.parse(savedProfile));
//       if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
//       if (savedMessages) setMessages(JSON.parse(savedMessages));
//     }
//   }, [router]);

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthenticated');
//     router.push('/admin/login');
//   };

//   const saveProfile = (values) => {
//     setProfile(values);
//     localStorage.setItem('profile', JSON.stringify(values));
//     message.success('Profile saved successfully');
//   };

//   const saveBlog = (values) => {
//     const updatedBlogs = [...blogs, values];
//     setBlogs(updatedBlogs);
//     localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//     message.success('Blog post saved successfully');
//     setIsModalVisible(false);
//     form.resetFields();
//   };

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   if (!isAuthenticated) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <Button type="primary" danger onClick={handleLogout}>
//           Logout
//         </Button>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Profile Management</h2>
//         <Form form={form} onFinish={saveProfile} initialValues={profile}>
//           <Form.Item name="fullName" label="Full Name">
//             <Input />
//           </Form.Item>
//           <Form.Item name="email" label="Email">
//             <Input />
//           </Form.Item>
//           <Form.Item name="phone" label="Phone Number">
//             <Input />
//           </Form.Item>
//           <Form.Item name="country" label="Country">
//             <Input />
//           </Form.Item>
//           <Form.Item name="about" label="About Text">
//             <Input.TextArea />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Save Profile
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Blog Management</h2>
//         <Button type="primary" onClick={showModal}>
//           Create Blog Post
//         </Button>
//         <Modal title="Create Blog Post" visible={isModalVisible} onCancel={handleCancel} footer={null}>
//           <Form form={form} onFinish={saveBlog}>
//             <Form.Item name="title" label="Title">
//               <Input />
//             </Form.Item>
//             <Form.Item name="content" label="Content">
//               <Input.TextArea />
//             </Form.Item>
//             <Form.Item name="image" label="Image">
//               <Upload>
//                 <Button icon={<UploadOutlined />}>Click to Upload</Button>
//               </Upload>
//             </Form.Item>
//             <Form.Item>
//               <Button type="primary" htmlType="submit">
//                 Save Blog Post
//               </Button>
//             </Form.Item>
//           </Form>
//         </Modal>
//         <div className="mt-4">
//           {blogs.map((blog, index) => (
//             <div key={index} className="mb-4 p-4 border rounded">
//               <h3 className="font-bold">{blog.title}</h3>
//               <p>{blog.content}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
//         {messages.map((message, index) => (
//           <div key={index} className="mb-4 p-4 border rounded">
//             <p><strong>Name:</strong> {message.name}</p>
//             <p><strong>Email:</strong> {message.email}</p>
//             <p><strong>Subject:</strong> {message.subject}</p>
//             <p><strong>Message:</strong> {message.body}</p>
//             <p><strong>Date:</strong> {message.date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // update, image not showing
// 'use client'
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Button, message, Form, Input, Upload, Modal } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

// const { TextArea } = Input;

// export default function Dashboard() {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [profile, setProfile] = useState({});
//   const [blogs, setBlogs] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [form] = Form.useForm();
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [fileList, setFileList] = useState([]);

//   useEffect(() => {
//     const auth = localStorage.getItem('isAuthenticated');
//     if (auth !== 'true') {
//       router.push('/admin/login');
//     } else {
//       setIsAuthenticated(true);
//       // Load data from localStorage
//       const savedProfile = localStorage.getItem('profile');
//       const savedBlogs = localStorage.getItem('blogs');
//       const savedMessages = localStorage.getItem('messages');

//       if (savedProfile) setProfile(JSON.parse(savedProfile));
//       if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
//       if (savedMessages) setMessages(JSON.parse(savedMessages));
//     }
//   }, [router]);

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthenticated');
//     router.push('/admin/login');
//   };

//   const saveProfile = (values) => {
//     setProfile(values);
//     localStorage.setItem('profile', JSON.stringify(values));
//     message.success('Profile saved successfully');
//   };

//   const handleImageUpload = ({ fileList }) => {
//     setFileList(fileList);
//   };

//   const saveBlog = (values) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const imageBase64 = reader.result;
//       const blogData = {
//         ...values,
//         image: imageBase64,
//       };
//       const updatedBlogs = [...blogs, blogData];
//       setBlogs(updatedBlogs);
//       localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//       message.success('Blog post saved successfully');
//       setIsModalVisible(false);
//       form.resetFields();
//       setFileList([]);
//     };
//     if (fileList.length > 0) {
//       reader.readAsDataURL(fileList[0].originFileObj);
//     } else {
//       const updatedBlogs = [...blogs, values];
//       setBlogs(updatedBlogs);
//       localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//       message.success('Blog post saved successfully');
//       setIsModalVisible(false);
//       form.resetFields();
//     }
//   };

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   if (!isAuthenticated) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <Button type="primary" danger onClick={handleLogout}>
//           Logout
//         </Button>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Profile Management</h2>
//         <Form form={form} onFinish={saveProfile} initialValues={profile}>
//           <Form.Item name="fullName" label="Full Name">
//             <Input />
//           </Form.Item>
//           <Form.Item name="email" label="Email">
//             <Input />
//           </Form.Item>
//           <Form.Item name="phone" label="Phone Number">
//             <Input />
//           </Form.Item>
//           <Form.Item name="country" label="Country">
//             <Input />
//           </Form.Item>
//           <Form.Item name="about" label="About Text">
//             <TextArea />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Save Profile
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Blog Management</h2>
//         <Button type="primary" onClick={showModal}>
//           Create Blog Post
//         </Button>
//         <Modal title="Create Blog Post" visible={isModalVisible} onCancel={handleCancel} footer={null}>
//           <Form form={form} onFinish={saveBlog}>
//             <Form.Item name="title" label="Title">
//               <Input />
//             </Form.Item>
//             <Form.Item name="content" label="Content">
//               <TextArea />
//             </Form.Item>
//             <Form.Item name="image" label="Image">
//               <Upload
//                 fileList={fileList}
//                 onChange={handleImageUpload}
//                 beforeUpload={() => false}
//               >
//                 <Button icon={<UploadOutlined />}>Click to Upload</Button>
//               </Upload>
//             </Form.Item>
//             <Form.Item>
//               <Button type="primary" htmlType="submit">
//                 Save Blog Post
//               </Button>
//             </Form.Item>
//           </Form>
//         </Modal>
//         <div className="mt-4">
//           {blogs.map((blog, index) => (
//             <div key={index} className="mb-4 p-4 border rounded">
//               <h3 className="font-bold">{blog.title}</h3>
//               {blog.image && (
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-48 object-cover my-2"
//                 />
//               )}
//               <p>{blog.content}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
//         {messages.map((message, index) => (
//           <div key={index} className="mb-4 p-4 border rounded">
//             <p><strong>Name:</strong> {message.name}</p>
//             <p><strong>Email:</strong> {message.email}</p>
//             <p><strong>Subject:</strong> {message.subject}</p>
//             <p><strong>Message:</strong> {message.body}</p>
//             <p><strong>Date:</strong> {message.date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ////// fix country api
// 'use client'
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Button, message, Form, Input, Upload, Modal, Select } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

// const { TextArea } = Input;
// const { Option } = Select;

// export default function Dashboard() {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [profile, setProfile] = useState({});
//   const [blogs, setBlogs] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [countries, setCountries] = useState([]);
//   const [form] = Form.useForm();
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [fileList, setFileList] = useState([]);

//   useEffect(() => {
//     const auth = localStorage.getItem('isAuthenticated');
//     if (auth !== 'true') {
//       router.push('/admin/login');
//     } else {
//       setIsAuthenticated(true);
//       // Load data from localStorage
//       const savedProfile = localStorage.getItem('profile');
//       const savedBlogs = localStorage.getItem('blogs');
//       const savedMessages = localStorage.getItem('messages');

//       if (savedProfile) setProfile(JSON.parse(savedProfile));
//       if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
//       if (savedMessages) setMessages(JSON.parse(savedMessages));
//     }

//     // Fetch countries from REST Countries API
//     fetch('https://restcountries.com/v3.1/all?fields=name')
//       .then(response => response.json())
//       .then(data => {
//         const countryNames = data.map(country => country.name.common).sort();
//         setCountries(countryNames);
//       })
//       .catch(error => {
//         console.error('Error fetching countries:', error);
//       });
//   }, [router]);

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthenticated');
//     router.push('/admin/login');
//   };

//   const saveProfile = (values) => {
//     setProfile(values);
//     localStorage.setItem('profile', JSON.stringify(values));
//     message.success('Profile saved successfully');
//   };

//   const handleImageUpload = ({ fileList }) => {
//     setFileList(fileList);
//   };

//   const saveBlog = (values) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const imageBase64 = reader.result;
//       const blogData = {
//         ...values,
//         image: imageBase64,
//       };
//       const updatedBlogs = [...blogs, blogData];
//       setBlogs(updatedBlogs);
//       localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//       message.success('Blog post saved successfully');
//       setIsModalVisible(false);
//       form.resetFields();
//       setFileList([]);
//     };
//     if (fileList.length > 0) {
//       reader.readAsDataURL(fileList[0].originFileObj);
//     } else {
//       const updatedBlogs = [...blogs, values];
//       setBlogs(updatedBlogs);
//       localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//       message.success('Blog post saved successfully');
//       setIsModalVisible(false);
//       form.resetFields();
//     }
//   };

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   if (!isAuthenticated) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <Button type="primary" danger onClick={handleLogout}>
//           Logout
//         </Button>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Profile Management</h2>
//         <Form form={form} onFinish={saveProfile} initialValues={profile}>
//           <Form.Item name="fullName" label="Full Name">
//             <Input />
//           </Form.Item>
//           <Form.Item name="email" label="Email">
//             <Input />
//           </Form.Item>
//           <Form.Item name="phone" label="Phone Number">
//             <Input />
//           </Form.Item>
//           <Form.Item name="country" label="Country">
//             <Select placeholder="Select a country">
//               {countries.map(country => (
//                 <Option key={country} value={country}>{country}</Option>
//               ))}
//             </Select>
//           </Form.Item>
//           <Form.Item name="about" label="About Text">
//             <TextArea />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Save Profile
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Blog Management</h2>
//         <Button type="primary" onClick={showModal}>
//           Create Blog Post
//         </Button>
//         <Modal title="Create Blog Post" visible={isModalVisible} onCancel={handleCancel} footer={null}>
//           <Form form={form} onFinish={saveBlog}>
//             <Form.Item name="title" label="Title">
//               <Input />
//             </Form.Item>
//             <Form.Item name="content" label="Content">
//               <TextArea />
//             </Form.Item>
//             <Form.Item name="image" label="Image">
//               <Upload
//                 fileList={fileList}
//                 onChange={handleImageUpload}
//                 beforeUpload={() => false}
//               >
//                 <Button icon={<UploadOutlined />}>Click to Upload</Button>
//               </Upload>
//             </Form.Item>
//             <Form.Item>
//               <Button type="primary" htmlType="submit">
//                 Save Blog Post
//               </Button>
//             </Form.Item>
//           </Form>
//         </Modal>
//         <div className="mt-4">
//           {blogs.map((blog, index) => (
//             <div key={index} className="mb-4 p-4 border rounded">
//               <h3 className="font-bold">{blog.title}</h3>
//               {blog.image && (
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-48 object-cover my-2"
//                 />
//               )}
//               <p>{blog.content}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
//         {messages.map((message, index) => (
//           <div key={index} className="mb-4 p-4 border rounded">
//             <p><strong>Name:</strong> {message.name}</p>
//             <p><strong>Email:</strong> {message.email}</p>
//             <p><strong>Subject:</strong> {message.subject}</p>
//             <p><strong>Message:</strong> {message.body}</p>
//             <p><strong>Date:</strong> {message.date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ///// enable add profile picture to admin page
// 'use client'
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Button, message, Form, Input, Upload, Modal, Select } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

// const { TextArea } = Input;
// const { Option } = Select;

// export default function Dashboard() {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [profile, setProfile] = useState({});
//   const [blogs, setBlogs] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [countries, setCountries] = useState([]);
//   const [form] = Form.useForm();
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [fileList, setFileList] = useState([]);
//   const [profileImageFileList, setProfileImageFileList] = useState([]);

//   useEffect(() => {
//     const auth = localStorage.getItem('isAuthenticated');
//     if (auth !== 'true') {
//       router.push('/admin/login');
//     } else {
//       setIsAuthenticated(true);
//       // Load data from localStorage
//       const savedProfile = localStorage.getItem('profile');
//       const savedBlogs = localStorage.getItem('blogs');
//       const savedMessages = localStorage.getItem('messages');

//       if (savedProfile) setProfile(JSON.parse(savedProfile));
//       if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
//       if (savedMessages) setMessages(JSON.parse(savedMessages));
//     }

//     // Fetch countries from REST Countries API
//     fetch('https://restcountries.com/v3.1/all?fields=name')
//       .then(response => response.json())
//       .then(data => {
//         const countryNames = data.map(country => country.name.common).sort();
//         setCountries(countryNames);
//       })
//       .catch(error => {
//         console.error('Error fetching countries:', error);
//       });
//   }, [router]);

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthenticated');
//     router.push('/admin/login');
//   };

//   const handleProfileImageUpload = ({ fileList: newFileList }) => {
//     setProfileImageFileList(newFileList);
//   };

//   const saveProfile = (values) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const profileImageBase64 = reader.result;
//       const profileData = {
//         ...values,
//         profileImage: profileImageBase64,
//       };
//       setProfile(profileData);
//       localStorage.setItem('profile', JSON.stringify(profileData));
//       message.success('Profile saved successfully');
//     };
//     if (profileImageFileList.length > 0) {
//       reader.readAsDataURL(profileImageFileList[0].originFileObj);
//     } else {
//       setProfile(values);
//       localStorage.setItem('profile', JSON.stringify(values));
//       message.success('Profile saved successfully');
//     }
//   };

//   const handleImageUpload = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//   };

//   const saveBlog = (values) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const imageBase64 = reader.result;
//       const blogData = {
//         ...values,
//         image: imageBase64,
//       };
//       const updatedBlogs = [...blogs, blogData];
//       setBlogs(updatedBlogs);
//       localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//       message.success('Blog post saved successfully');
//       setIsModalVisible(false);
//       form.resetFields();
//       setFileList([]);
//     };
//     if (fileList.length > 0) {
//       reader.readAsDataURL(fileList[0].originFileObj);
//     } else {
//       const updatedBlogs = [...blogs, values];
//       setBlogs(updatedBlogs);
//       localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//       message.success('Blog post saved successfully');
//       setIsModalVisible(false);
//       form.resetFields();
//     }
//   };

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   if (!isAuthenticated) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <Button type="primary" danger onClick={handleLogout}>
//           Logout
//         </Button>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Profile Management</h2>
//         <Form form={form} onFinish={saveProfile} initialValues={profile}>
//           <Form.Item name="fullName" label="Full Name">
//             <Input />
//           </Form.Item>
//           <Form.Item name="email" label="Email">
//             <Input />
//           </Form.Item>
//           <Form.Item name="phone" label="Phone Number">
//             <Input />
//           </Form.Item>
//           <Form.Item name="country" label="Country">
//             <Select placeholder="Select a country">
//               {countries.map(country => (
//                 <Option key={country} value={country}>{country}</Option>
//               ))}
//             </Select>
//           </Form.Item>
//           <Form.Item name="profileImage" label="Profile Image">
//             <Upload
//               listType="picture-circle"
//               fileList={profileImageFileList}
//               onChange={handleProfileImageUpload}
//               beforeUpload={() => false}
//               maxCount={1}
//             >
//               {profileImageFileList.length === 0 && <Button icon={<UploadOutlined />}>Upload Profile Image</Button>}
//             </Upload>
//           </Form.Item>
//           <Form.Item name="about" label="About Text">
//             <TextArea />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Save Profile
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Blog Management</h2>
//         <Button type="primary" onClick={showModal}>
//           Create Blog Post
//         </Button>
//         <Modal title="Create Blog Post" visible={isModalVisible} onCancel={handleCancel} footer={null}>
//           <Form form={form} onFinish={saveBlog}>
//             <Form.Item name="title" label="Title">
//               <Input />
//             </Form.Item>
//             <Form.Item name="content" label="Content">
//               <TextArea />
//             </Form.Item>
//             <Form.Item name="image" label="Image">
//               <Upload
//                 fileList={fileList}
//                 onChange={handleImageUpload}
//                 beforeUpload={() => false}
//               >
//                 <Button icon={<UploadOutlined />}>Click to Upload</Button>
//               </Upload>
//             </Form.Item>
//             <Form.Item>
//               <Button type="primary" htmlType="submit">
//                 Save Blog Post
//               </Button>
//             </Form.Item>
//           </Form>
//         </Modal>
//         <div className="mt-4">
//           {blogs.map((blog, index) => (
//             <div key={index} className="mb-4 p-4 border rounded">
//               <h3 className="font-bold">{blog.title}</h3>
//               {blog.image && (
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-48 object-cover my-2"
//                 />
//               )}
//               <p>{blog.content}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
//         {messages.map((message, index) => (
//           <div key={index} className="mb-4 p-4 border rounded">
//             <p><strong>Name:</strong> {message.name}</p>
//             <p><strong>Email:</strong> {message.email}</p>
//             <p><strong>Subject:</strong> {message.subject}</p>
//             <p><strong>Message:</strong> {message.body}</p>
//             <p><strong>Date:</strong> {message.date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

///////// enable crud for blog management
// 'use client'
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Button, message, Form, Input, Upload, Modal, Select, DatePicker } from 'antd';
// import { UploadOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import moment from 'moment';

// const { TextArea } = Input;
// const { Option } = Select;

// export default function Dashboard() {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [profile, setProfile] = useState({});
//   const [blogs, setBlogs] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [countries, setCountries] = useState([]);
//   const [form] = Form.useForm();
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [fileList, setFileList] = useState([]);
//   const [profileImageFileList, setProfileImageFileList] = useState([]);
//   const [editingBlog, setEditingBlog] = useState(null);

//   useEffect(() => {
//     const auth = localStorage.getItem('isAuthenticated');
//     if (auth !== 'true') {
//       router.push('/admin/login');
//     } else {
//       setIsAuthenticated(true);
//       const savedProfile = localStorage.getItem('profile');
//       const savedBlogs = localStorage.getItem('blogs');
//       const savedMessages = localStorage.getItem('messages');

//       if (savedProfile) setProfile(JSON.parse(savedProfile));
//       if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
//       if (savedMessages) setMessages(JSON.parse(savedMessages));
//     }

//     fetch('https://restcountries.com/v3.1/all?fields=name')
//       .then(response => response.json())
//       .then(data => {
//         const countryNames = data.map(country => country.name.common).sort();
//         setCountries(countryNames);
//       })
//       .catch(error => {
//         console.error('Error fetching countries:', error);
//       });
//   }, [router]);

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthenticated');
//     router.push('/admin/login');
//   };

//   const handleProfileImageUpload = ({ fileList: newFileList }) => {
//     setProfileImageFileList(newFileList);
//   };

//   const saveProfile = (values) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const profileImageBase64 = reader.result;
//       const profileData = {
//         ...values,
//         profileImage: profileImageBase64,
//       };
//       setProfile(profileData);
//       localStorage.setItem('profile', JSON.stringify(profileData));
//       message.success('Profile saved successfully');
//     };
//     if (profileImageFileList.length > 0) {
//       reader.readAsDataURL(profileImageFileList[0].originFileObj);
//     } else {
//       setProfile(values);
//       localStorage.setItem('profile', JSON.stringify(values));
//       message.success('Profile saved successfully');
//     }
//   };

//   const handleImageUpload = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//   };

//   const saveBlog = (values) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const imageBase64 = reader.result;
//       const blogData = {
//         ...values,
//         image: imageBase64,
//         date: moment().format('YYYY-MM-DD HH:mm:ss')
//       };

//       let updatedBlogs;
//       if (editingBlog !== null) {
//         updatedBlogs = blogs.map(blog => (blog.date === editingBlog.date ? blogData : blog));
//         setEditingBlog(null);
//       } else {
//         updatedBlogs = [...blogs, blogData];
//       }

//       setBlogs(updatedBlogs);
//       localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//       message.success(editingBlog ? 'Blog post updated successfully' : 'Blog post saved successfully');
//       setIsModalVisible(false);
//       form.resetFields();
//       setFileList([]);
//     };

//     if (fileList.length > 0) {
//       reader.readAsDataURL(fileList[0].originFileObj);
//     } else {
//       const blogData = {
//         ...values,
//         date: moment().format('YYYY-MM-DD HH:mm:ss')
//       };

//       let updatedBlogs;
//       if (editingBlog !== null) {
//         updatedBlogs = blogs.map(blog => (blog.date === editingBlog.date ? blogData : blog));
//         setEditingBlog(null);
//       } else {
//         updatedBlogs = [...blogs, blogData];
//       }

//       setBlogs(updatedBlogs);
//       localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//       message.success(editingBlog ? 'Blog post updated successfully' : 'Blog post saved successfully');
//       setIsModalVisible(false);
//       form.resetFields();
//     }
//   };

//   const editBlog = (blog) => {
//     setEditingBlog(blog);
//     form.setFieldsValue(blog);
//     setIsModalVisible(true);
//   };

//   const deleteBlog = (blogToDelete) => {
//     const updatedBlogs = blogs.filter(blog => blog.date !== blogToDelete.date);
//     setBlogs(updatedBlogs);
//     localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//     message.success('Blog post deleted successfully');
//   };

//   const showModal = () => {
//     setIsModalVisible(true);
//     setEditingBlog(null);
//     form.resetFields();
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//     setEditingBlog(null);
//   };

//   if (!isAuthenticated) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <Button type="primary" danger onClick={handleLogout}>
//           Logout
//         </Button>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Profile Management</h2>
//         <Form form={form} onFinish={saveProfile} initialValues={profile}>
//           <Form.Item name="fullName" label="Full Name">
//             <Input />
//           </Form.Item>
//           <Form.Item name="email" label="Email">
//             <Input />
//           </Form.Item>
//           <Form.Item name="phone" label="Phone Number">
//             <Input />
//           </Form.Item>
//           <Form.Item name="country" label="Country">
//             <Select placeholder="Select a country">
//               {countries.map(country => (
//                 <Option key={country} value={country}>{country}</Option>
//               ))}
//             </Select>
//           </Form.Item>
//           <Form.Item name="profileImage" label="Profile Image">
//             <Upload
//               listType="picture-circle"
//               fileList={profileImageFileList}
//               onChange={handleProfileImageUpload}
//               beforeUpload={() => false}
//               maxCount={1}
//             >
//               {profileImageFileList.length === 0 && <Button icon={<UploadOutlined />}>Upload Profile Image</Button>}
//             </Upload>
//           </Form.Item>
//           <Form.Item name="about" label="About Text">
//             <TextArea />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Save Profile
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Blog Management</h2>
//         <Button type="primary" onClick={showModal}>
//           Create Blog Post
//         </Button>
//         <Modal title={editingBlog ? "Edit Blog Post" : "Create Blog Post"} visible={isModalVisible} onCancel={handleCancel} footer={null}>
//           <Form form={form} onFinish={saveBlog}>
//             <Form.Item name="title" label="Title">
//               <Input />
//             </Form.Item>
//             <Form.Item name="content" label="Content">
//               <TextArea />
//             </Form.Item>
//             <Form.Item name="image" label="Image">
//               <Upload
//                 fileList={fileList}
//                 onChange={handleImageUpload}
//                 beforeUpload={() => false}
//               >
//                 <Button icon={<UploadOutlined />}>Click to Upload</Button>
//               </Upload>
//             </Form.Item>
//             <Form.Item>
//               <Button type="primary" htmlType="submit">
//                 {editingBlog ? "Update Blog Post" : "Save Blog Post"}
//               </Button>
//             </Form.Item>
//           </Form>
//         </Modal>
//         <div className="mt-4">
//           {blogs.map((blog, index) => (
//             <div key={index} className="mb-4 p-4 border rounded">
//               <div className="flex justify-between items-center">
//                 <h3 className="font-bold">{blog.title}</h3>
//                 <div>
//                   <Button icon={<EditOutlined />} onClick={() => editBlog(blog)} className="mr-2">
//                     Edit
//                   </Button>
//                   <Button icon={<DeleteOutlined />} onClick={() => deleteBlog(blog)} danger>
//                     Delete
//                   </Button>
//                 </div>
//               </div>
//               {blog.image && (
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-48 object-cover my-2"
//                 />
//               )}
//               <p>{blog.content}</p>
//               <p className="text-sm text-gray-500">{blog.date}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
//         {messages.map((message, index) => (
//           <div key={index} className="mb-4 p-4 border rounded">
//             <p><strong>Name:</strong> {message.name}</p>
//             <p><strong>Email:</strong> {message.email}</p>
//             <p><strong>Subject:</strong> {message.subject}</p>
//             <p><strong>Message:</strong> {message.body}</p>
//             <p><strong>Date:</strong> {message.date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//////// add a simple dashboard UI showing statistics such as the number of blogs and messages
// 'use client'
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Button, message, Form, Input, Upload, Modal, Select, Card, Row, Col } from 'antd';
// import { UploadOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import moment from 'moment';

// const { TextArea } = Input;
// const { Option } = Select;

// export default function Dashboard() {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [profile, setProfile] = useState({});
//   const [blogs, setBlogs] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [countries, setCountries] = useState([]);
//   const [form] = Form.useForm();
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [fileList, setFileList] = useState([]);
//   const [profileImageFileList, setProfileImageFileList] = useState([]);
//   const [editingBlog, setEditingBlog] = useState(null);

//   useEffect(() => {
//     const auth = localStorage.getItem('isAuthenticated');
//     if (auth !== 'true') {
//       router.push('/admin/login');
//     } else {
//       setIsAuthenticated(true);
//       const savedProfile = localStorage.getItem('profile');
//       const savedBlogs = localStorage.getItem('blogs');
//       const savedMessages = localStorage.getItem('messages');

//       if (savedProfile) setProfile(JSON.parse(savedProfile));
//       if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
//       if (savedMessages) setMessages(JSON.parse(savedMessages));
//     }

//     fetch('https://restcountries.com/v3.1/all?fields=name')
//       .then(response => response.json())
//       .then(data => {
//         const countryNames = data.map(country => country.name.common).sort();
//         setCountries(countryNames);
//       })
//       .catch(error => {
//         console.error('Error fetching countries:', error);
//       });
//   }, [router]);

//   const handleLogout = () => {
//     localStorage.removeItem('isAuthenticated');
//     router.push('/admin/login');
//   };

//   const handleProfileImageUpload = ({ fileList: newFileList }) => {
//     setProfileImageFileList(newFileList);
//   };

//   const saveProfile = (values) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const profileImageBase64 = reader.result;
//       const profileData = {
//         ...values,
//         profileImage: profileImageBase64,
//       };
//       setProfile(profileData);
//       localStorage.setItem('profile', JSON.stringify(profileData));
//       message.success('Profile saved successfully');
//     };
//     if (profileImageFileList.length > 0) {
//       reader.readAsDataURL(profileImageFileList[0].originFileObj);
//     } else {
//       setProfile(values);
//       localStorage.setItem('profile', JSON.stringify(values));
//       message.success('Profile saved successfully');
//     }
//   };

//   const handleImageUpload = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//   };

//   const saveBlog = (values) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const imageBase64 = reader.result;
//       const blogData = {
//         ...values,
//         image: imageBase64,
//         date: moment().format('YYYY-MM-DD HH:mm:ss')
//       };

//       let updatedBlogs;
//       if (editingBlog !== null) {
//         updatedBlogs = blogs.map(blog => (blog.date === editingBlog.date ? blogData : blog));
//         setEditingBlog(null);
//       } else {
//         updatedBlogs = [...blogs, blogData];
//       }

//       setBlogs(updatedBlogs);
//       localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//       message.success(editingBlog ? 'Blog post updated successfully' : 'Blog post saved successfully');
//       setIsModalVisible(false);
//       form.resetFields();
//       setFileList([]);
//     };

//     if (fileList.length > 0) {
//       reader.readAsDataURL(fileList[0].originFileObj);
//     } else {
//       const blogData = {
//         ...values,
//         date: moment().format('YYYY-MM-DD HH:mm:ss')
//       };

//       let updatedBlogs;
//       if (editingBlog !== null) {
//         updatedBlogs = blogs.map(blog => (blog.date === editingBlog.date ? blogData : blog));
//         setEditingBlog(null);
//       } else {
//         updatedBlogs = [...blogs, blogData];
//       }

//       setBlogs(updatedBlogs);
//       localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//       message.success(editingBlog ? 'Blog post updated successfully' : 'Blog post saved successfully');
//       setIsModalVisible(false);
//       form.resetFields();
//     }
//   };

//   const editBlog = (blog) => {
//     setEditingBlog(blog);
//     form.setFieldsValue(blog);
//     setIsModalVisible(true);
//   };

//   const deleteBlog = (blogToDelete) => {
//     const updatedBlogs = blogs.filter(blog => blog.date !== blogToDelete.date);
//     setBlogs(updatedBlogs);
//     localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//     message.success('Blog post deleted successfully');
//   };

//   const showModal = () => {
//     setIsModalVisible(true);
//     setEditingBlog(null);
//     form.resetFields();
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//     setEditingBlog(null);
//   };

//   if (!isAuthenticated) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <Button type="primary" danger onClick={handleLogout}>
//           Logout
//         </Button>
//       </div>

//       <div className="mb-8">
//         <Row gutter={16}>
//           <Col span={8}>
//             <Card bordered={false} className="bg-blue-50">
//               <p className="text-gray-500">Total Blogs</p>
//               <p className="text-3xl font-bold">{blogs.length}</p>
//             </Card>
//           </Col>
//           <Col span={8}>
//             <Card bordered={false} className="bg-green-50">
//               <p className="text-gray-500">Total Messages</p>
//               <p className="text-3xl font-bold">{messages.length}</p>
//             </Card>
//           </Col>
//           <Col span={8}>
//             <Card bordered={false} className="bg-purple-50">
//               <p className="text-gray-500">Last Updated</p>
//               <p className="text-3xl font-bold">{blogs.length > 0 ? moment(blogs[0].date).fromNow() : 'N/A'}</p>
//             </Card>
//           </Col>
//         </Row>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Profile Management</h2>
//         <Form form={form} onFinish={saveProfile} initialValues={profile}>
//           <Form.Item name="fullName" label="Full Name">
//             <Input />
//           </Form.Item>
//           <Form.Item name="email" label="Email">
//             <Input />
//           </Form.Item>
//           <Form.Item name="phone" label="Phone Number">
//             <Input />
//           </Form.Item>
//           <Form.Item name="country" label="Country">
//             <Select placeholder="Select a country">
//               {countries.map(country => (
//                 <Option key={country} value={country}>{country}</Option>
//               ))}
//             </Select>
//           </Form.Item>
//           <Form.Item name="profileImage" label="Profile Image">
//             <Upload
//               listType="picture-circle"
//               fileList={profileImageFileList}
//               onChange={handleProfileImageUpload}
//               beforeUpload={() => false}
//               maxCount={1}
//             >
//               {profileImageFileList.length === 0 && <Button icon={<UploadOutlined />}>Upload Profile Image</Button>}
//             </Upload>
//           </Form.Item>
//           <Form.Item name="about" label="About Text">
//             <TextArea />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Save Profile
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Blog Management</h2>
//         <Button type="primary" onClick={showModal}>
//           Create Blog Post
//         </Button>
//         <Modal title={editingBlog ? "Edit Blog Post" : "Create Blog Post"} visible={isModalVisible} onCancel={handleCancel} footer={null}>
//           <Form form={form} onFinish={saveBlog}>
//             <Form.Item name="title" label="Title">
//               <Input />
//             </Form.Item>
//             <Form.Item name="content" label="Content">
//               <TextArea />
//             </Form.Item>
//             <Form.Item name="image" label="Image">
//               <Upload
//                 fileList={fileList}
//                 onChange={handleImageUpload}
//                 beforeUpload={() => false}
//               >
//                 <Button icon={<UploadOutlined />}>Click to Upload</Button>
//               </Upload>
//             </Form.Item>
//             <Form.Item>
//               <Button type="primary" htmlType="submit">
//                 {editingBlog ? "Update Blog Post" : "Save Blog Post"}
//               </Button>
//             </Form.Item>
//           </Form>
//         </Modal>
//         <div className="mt-4">
//           {blogs.map((blog, index) => (
//             <div key={index} className="mb-4 p-4 border rounded">
//               <div className="flex justify-between items-center">
//                 <h3 className="font-bold">{blog.title}</h3>
//                 <div>
//                   <Button icon={<EditOutlined />} onClick={() => editBlog(blog)} className="mr-2">
//                     Edit
//                   </Button>
//                   <Button icon={<DeleteOutlined />} onClick={() => deleteBlog(blog)} danger>
//                     Delete
//                   </Button>
//                 </div>
//               </div>
//               {blog.image && (
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-48 object-cover my-2"
//                 />
//               )}
//               <p>{blog.content}</p>
//               <p className="text-sm text-gray-500">{blog.date}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
//         {messages.map((message, index) => (
//           <div key={index} className="mb-4 p-4 border rounded">
//             <p><strong>Name:</strong> {message.name}</p>
//             <p><strong>Email:</strong> {message.email}</p>
//             <p><strong>Subject:</strong> {message.subject}</p>
//             <p><strong>Message:</strong> {message.body}</p>
//             <p><strong>Date:</strong> {message.date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

///////// add toggle for dark mode
'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, message, Form, Input, Upload, Modal, Select, Card, Row, Col, Switch } from 'antd';
import { UploadOutlined, EditOutlined, DeleteOutlined, BulbOutlined } from '@ant-design/icons';
import moment from 'moment';

const { TextArea } = Input;
const { Option } = Select;

export default function Dashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [messages, setMessages] = useState([]);
  const [countries, setCountries] = useState([]);
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [profileImageFileList, setProfileImageFileList] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth !== 'true') {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
      const savedProfile = localStorage.getItem('profile');
      const savedBlogs = localStorage.getItem('blogs');
      const savedMessages = localStorage.getItem('messages');
      const savedDarkMode = localStorage.getItem('darkMode') === 'true';

      if (savedProfile) setProfile(JSON.parse(savedProfile));
      if (savedBlogs) setBlogs(JSON.parse(savedBlogs));
      if (savedMessages) setMessages(JSON.parse(savedMessages));
      setDarkMode(savedDarkMode);
    }

    fetch('https://restcountries.com/v3.1/all?fields=name')
      .then(response => response.json())
      .then(data => {
        const countryNames = data.map(country => country.name.common).sort();
        setCountries(countryNames);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, [router]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/admin/login');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleProfileImageUpload = ({ fileList: newFileList }) => {
    setProfileImageFileList(newFileList);
  };

  const saveProfile = (values) => {
    const reader = new FileReader();
    reader.onload = () => {
      const profileImageBase64 = reader.result;
      const profileData = {
        ...values,
        profileImage: profileImageBase64,
      };
      setProfile(profileData);
      localStorage.setItem('profile', JSON.stringify(profileData));
      message.success('Profile saved successfully');
    };
    if (profileImageFileList.length > 0) {
      reader.readAsDataURL(profileImageFileList[0].originFileObj);
    } else {
      setProfile(values);
      localStorage.setItem('profile', JSON.stringify(values));
      message.success('Profile saved successfully');
    }
  };

  const handleImageUpload = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const saveBlog = (values) => {
    const reader = new FileReader();
    reader.onload = () => {
      const imageBase64 = reader.result;
      const blogData = {
        ...values,
        image: imageBase64,
        date: moment().format('YYYY-MM-DD HH:mm:ss')
      };

      let updatedBlogs;
      if (editingBlog !== null) {
        updatedBlogs = blogs.map(blog => (blog.date === editingBlog.date ? blogData : blog));
        setEditingBlog(null);
      } else {
        updatedBlogs = [...blogs, blogData];
      }

      setBlogs(updatedBlogs);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      message.success(editingBlog ? 'Blog post updated successfully' : 'Blog post saved successfully');
      setIsModalVisible(false);
      form.resetFields();
      setFileList([]);
    };

    if (fileList.length > 0) {
      reader.readAsDataURL(fileList[0].originFileObj);
    } else {
      const blogData = {
        ...values,
        date: moment().format('YYYY-MM-DD HH:mm:ss')
      };

      let updatedBlogs;
      if (editingBlog !== null) {
        updatedBlogs = blogs.map(blog => (blog.date === editingBlog.date ? blogData : blog));
        setEditingBlog(null);
      } else {
        updatedBlogs = [...blogs, blogData];
      }

      setBlogs(updatedBlogs);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      message.success(editingBlog ? 'Blog post updated successfully' : 'Blog post saved successfully');
      setIsModalVisible(false);
      form.resetFields();
    }
  };

  const editBlog = (blog) => {
    setEditingBlog(blog);
    form.setFieldsValue(blog);
    setIsModalVisible(true);
  };

  const deleteBlog = (blogToDelete) => {
    const updatedBlogs = blogs.filter(blog => blog.date !== blogToDelete.date);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    message.success('Blog post deleted successfully');
  };

  const showModal = () => {
    setIsModalVisible(true);
    setEditingBlog(null);
    form.resetFields();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingBlog(null);
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Switch
            checkedChildren={<BulbOutlined />}
            unCheckedChildren={<BulbOutlined />}
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <Button type="primary" danger onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <Row gutter={16}>
          <Col span={8}>
            <Card bordered={false} className="bg-blue-50 dark:bg-gray-800">
              <p className="text-gray-500 dark:text-gray-300">Total Blogs</p>
              <p className="text-3xl font-bold">{blogs.length}</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false} className="bg-green-50 dark:bg-gray-800">
              <p className="text-gray-500 dark:text-gray-300">Total Messages</p>
              <p className="text-3xl font-bold">{messages.length}</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false} className="bg-purple-50 dark:bg-gray-800">
              <p className="text-gray-500 dark:text-gray-300">Last Updated</p>
              <p className="text-3xl font-bold">{blogs.length > 0 ? moment(blogs[0].date).fromNow() : 'N/A'}</p>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Profile Management</h2>
        <Form form={form} onFinish={saveProfile} initialValues={profile}>
          <Form.Item name="fullName" label="Full Name">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone Number">
            <Input />
          </Form.Item>
          <Form.Item name="country" label="Country">
            <Select placeholder="Select a country">
              {countries.map(country => (
                <Option key={country} value={country}>{country}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="profileImage" label="Profile Image">
            <Upload
              listType="picture-circle"
              fileList={profileImageFileList}
              onChange={handleProfileImageUpload}
              beforeUpload={() => false}
              maxCount={1}
            >
              {profileImageFileList.length === 0 && <Button icon={<UploadOutlined />}>Upload Profile Image</Button>}
            </Upload>
          </Form.Item>
          <Form.Item name="about" label="About Text">
            <TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Profile
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Blog Management</h2>
        <Button type="primary" onClick={showModal}>
          Create Blog Post
        </Button>
        <Modal title={editingBlog ? "Edit Blog Post" : "Create Blog Post"} visible={isModalVisible} onCancel={handleCancel} footer={null}>
          <Form form={form} onFinish={saveBlog}>
            <Form.Item name="title" label="Title">
              <Input />
            </Form.Item>
            <Form.Item name="content" label="Content">
              <TextArea />
            </Form.Item>
            <Form.Item name="image" label="Image">
              <Upload
                fileList={fileList}
                onChange={handleImageUpload}
                beforeUpload={() => false}
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {editingBlog ? "Update Blog Post" : "Save Blog Post"}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <div className="mt-4">
          {blogs.map((blog, index) => (
            <div key={index} className="mb-4 p-4 border rounded" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg-color)' }}>
              <div className="flex justify-between items-center">
                <h3 className="font-bold">{blog.title}</h3>
                <div>
                  <Button icon={<EditOutlined />} onClick={() => editBlog(blog)} className="mr-2">
                    Edit
                  </Button>
                  <Button icon={<DeleteOutlined />} onClick={() => deleteBlog(blog)} danger>
                    Delete
                  </Button>
                </div>
              </div>
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover my-2"
                />
              )}
              <p>{blog.content}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">{blog.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
        {messages.map((message, index) => (
          <div key={index} className="mb-4 p-4 border rounded" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg-color)' }}>
            <p><strong>Name:</strong> {message.name}</p>
            <p><strong>Email:</strong> {message.email}</p>
            <p><strong>Subject:</strong> {message.subject}</p>
            <p><strong>Message:</strong> {message.body}</p>
            <p><strong>Date:</strong> {message.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
