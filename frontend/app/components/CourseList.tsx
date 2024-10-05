'use client'
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { fetchCourses } from '../services/api';
import Link from 'next/link';

const CourseList = ({
  courses,
  totalCount,
}: {
  courses: any[];
  totalCount: number;
}) => {
  const [page, setPage] = useState(1);
  const limit = 10;
  // const { data: coursesData, isLoading, error } = useQuery(['courses', page], () => fetchCourses(page, limit));

  

  // const { courses, totalCount } = coursesData; // Assuming your backend returns an object with `courses` and `totalCount`
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div>
      <ul className="space-y-4">
        {courses && courses.map(course => (
          <li key={course._id} className="p-4 border border-gray-300 rounded-md">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p>{course.description}</p>
            <Link href={`/courses/${course._id}`} className="text-blue-600">View Details</Link>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button 
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))} 
          disabled={page === 1}
          className={`p-2 bg-blue-600 text-white rounded-md ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        <span className="self-center">{`Page ${page} of ${totalPages}`}</span>
        <button 
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))} 
          disabled={page === totalPages}
          className={`p-2 bg-blue-600 text-white rounded-md ${page === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CourseList;
