import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  return (
    
    <div className='border rounded mb-4'>
    <Link 
      to={'/course/' + course._id} 
      onClick={() => scrollTo(0, 0)}
      className='block border border-gray-500/30 pb-4 overflow-hidden rounded-lg'
    >
      <img 
        src={course.courseThumbnail} 
        alt={course.courseTitle} 
        className='w-full object-cover rounded' 
      />
    </Link>

    <div className='mt-2 text-left'>
      <Link 
        to={'/course/' + course._id} 
        onClick={() => scrollTo(0, 0)}
      >
        <h3 className='text-xl font-semibold hover:underline'>
          {course.courseTitle}
        </h3>
      </Link>

      <p className='text-sm text-gray-600'>
        {course?.educator?.name || "Kazi Azizur Rahman"}
      </p>

      <div className='flex items-center mt-1'>
        <p className='mr-2'>{calculateRating(course)}</p>
        <div className='flex'>
          {[...Array(5)].map((_, i) => (
            <img key={i} src={ i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt='star' className='w-4 h-4' />
          ))}
        </div>
        <p className='ml-2 text-sm text-gray-500'>{course.courseRatings.length}</p>
      </div>

      <p className='text-lg font-bold mt-2'>
        {currency}
        {(course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)}
      </p>
    </div>
  </div>

  );
};

export default CourseCard;
