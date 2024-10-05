'use client'
import { useQuery } from 'react-query';
import { useState } from 'react';
import CourseResult from './CourseResult';
import { fetchCourses } from '../services/api';
import axios from 'axios';
import CourseList from './CourseList';

const CourseForm = () => {
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);
  const limit = 10;
  const [instructor, setInstructor] = useState('');
  const [search, setSearch] = useState(false);
  const { data: courses, isLoading, error } = useQuery(['courses', search, page, limit], () => fetchCourses(page, limit, title));

    if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

console.log(courses)
    
  return (
    <>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by title or instructor"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 border border-gray-300 rounded-md mr-4"
            />
            <button
              onClick={()=>{
                setSearch((prev) => !prev)
              }}
              className="ml-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Search
            </button>
          </div>

          {courses.courses?.length > 0 ? (
            <CourseList courses={courses.courses} totalCount={courses.totalCount}/>   
          ) : (
            <p>No courses found</p>
          )}
    </>
  );
};

export default CourseForm;
