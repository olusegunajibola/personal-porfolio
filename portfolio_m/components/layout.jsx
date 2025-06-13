import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BulbOutlined } from '@ant-design/icons';

export default function MainLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background-color)] text-[var(--text-color)]">
      {/* Header */}
      <header className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
        <nav className="flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-yellow-400 transition">
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-700 transition"
          aria-label="Toggle Dark Mode"
        >
          <BulbOutlined className={`${darkMode ? 'text-yellow-300' : 'text-white'}`} />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-12 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <div className="flex justify-center gap-4 mb-2">
          <a href="https://x.com/olusegunaji" target="_blank" rel="noopener noreferrer">
            <img src="/images/x.svg.png" alt="X" className="w-6 h-6 object-contain" />
          </a>
          <a href="https://linkedin.com/in/oluaji" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedIn.svg" alt="LinkedIn" className="w-6 h-6 object-contain" />
          </a>
          <a href="mailto:olusegun.ajibola@aims-cameroon.org">
            <img src="/images/gmail.svg.png" alt="Gmail" className="w-6 h-6 object-contain" />
          </a>
        </div>
        © Copyright, Olusegun 2025
      </footer>
    </div>
  );
}
