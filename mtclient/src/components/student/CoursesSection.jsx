import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CourseCard from './CourseCard'
import { AppContext } from '../../context/AppContext'

const CoursesSection = () => {

const {allCourses} = useContext(AppContext)

  return (
    <div className="py-16 px-8 sm:px-12 lg:px-20">
    <h2 className="text-3xl sm:text-4xl font-medium text-gray-800 text-center md:text-center">Learn From The Best</h2>
    <p className="text-sm md:text-base text-gray-500 mt-3 text-center md:text-center max-w-4xl mx-auto">
      We bring together world-class instructors, interactive content, and a supportive community to help you achieve your goals.
    </p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 md:my-10 px-4 sm:px-0">
      {allCourses.slice(0, 4).map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  
    <div className="text-center mt-6">
      <Link
        to="/course-list"
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-5 py-3 rounded"
      >Show All Courses
      </Link>
    </div>
  </div>
  
          )
        }


export default CoursesSection