'use client'
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from 'react-query';
import { fetchCourseById } from '../../services/api';
import CourseList from '../../components/CourseList';
import CourseForm from '../../components/CourseForm';
import CourseSearch from '../../components/CourseSearch';
import { useAuth } from '@/app/components/ContextApi';

const CoursesPage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params ? params : {id:null};
  const [isAddingCourse, setIsAddingCourse] = useState(false);
  const [isSearchingCourse, IsSearchingCourse] = useState(false);
  const {isAuthenticated, setIsAuthenticated} = useAuth();

  const toggleCourseForm = () => {
    setIsAddingCourse((prev) => !prev);
  };
  const toggleCourseSearch = () => {
    IsSearchingCourse((prev) => !prev);
  };
  const { data: course, isLoading, error } = useQuery(['course', id], () => fetchCourseById(id), {
    enabled: !!id,
  });

  if (!id) {
    return (
      <div className="container mx-auto">
        <h1 className="text-2xl mb-4">Courses</h1>
        {isAuthenticated ? (
        <div className='flex flex-col sapace-y-4'>
          <button
            onClick={toggleCourseForm}
            className="mb-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            {isAddingCourse ? 'Cancel' : 'Add New Course'}
          </button>
          {
            isAddingCourse && (
              <div className="p-4">
                {isAddingCourse && <CourseForm />}
              </div>
            )
          }
          
          <CourseSearch />
        </div>
        ):(
          <p className="text-red-500">Please log in to see the courses.</p>
        )}
      </div>
    );
  }
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">{course.title}</h1>
      <p className="mb-2"><strong>Description:</strong> {course.description}</p>
      <p className="mb-2"><strong>Teacher:</strong> {course.instructor}</p>
      <p className="mb-2"><strong>Schedule:</strong> {course.schedule}</p>
      <button onClick={() => router.push('/courses')} className="mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
        Back to Courses
      </button>
    </div>
  );
};
export default CoursesPage;
