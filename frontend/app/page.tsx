// pages/courses/index.tsx
'use client'

import { useState } from 'react';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';
import { useAuth } from './components/ContextApi';

const HomePage = () => {
  const [isAddingCourse, setIsAddingCourse] = useState(false);
  
  const toggleCourseForm = () => {
    setIsAddingCourse((prev) => !prev); // Toggle the form display
  };

  return (
    <div className="">
      <h1 className="text-2xl mb-4 flex items-center justify-center">Course Management System</h1>
    </div>
  );
};

export default HomePage;
