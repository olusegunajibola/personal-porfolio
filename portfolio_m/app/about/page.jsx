'use client';
import { useState, useEffect, use } from 'react';
import MainLayout from '@/components/layout';

export default function About() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const savedProfile = localStorage.getItem('profile');
    if (savedProfile) setProfile(JSON.parse(savedProfile));
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto p-4">
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
      </div>
    </MainLayout>
  );
}
