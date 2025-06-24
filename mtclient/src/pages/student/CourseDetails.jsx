import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CallToAction from './../../components/student/CallToAction'
import { assets } from '../../assets/assets'
import StudentsEnrolled from './../educator/StudentsEnrolled';
import humanizeDuration from 'humanize-duration'
import Footer from '../../components/student/Footer'
import YouTube from 'react-youtube'

    const CourseDetails = () => {
      const { id } = useParams()

      const [courseData, setCourseData] = useState(null)
      const [openSection, setOpenSection] = useState({})
      const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false)
      const [playerData, setPlayerData] = useState(null)

      const { allCourses, calculateRating, calculateNoOfLectures, calculateCourseDuration, calculateChapterTime, currency } = useContext(AppContext)

      useEffect(() => {
        const fetchCourseData = async () => {
          const findCourse = allCourses.find(course => course._id === id)
          setCourseData(findCourse)
        }

        if (allCourses.length > 0) {
          fetchCourseData()
        }
      }, [allCourses, id])

      if (!courseData) {
        return <div className="text-center mt-20">Loading course details...</div>
      }

        const toggleSection = (index) => {
        setOpenSection((prev) => ({
          ...prev,
          [index]: !prev[index],
        }));
      };



      const rating = calculateRating(courseData)

        return (
          <>
          <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
            <div className="absolute top-0 left-0 w-full h-section-height z-0 bg-gradient-to-b from-cyan-100/70"></div>

            {/* Left Column */}
            <div className="max-w-xl z-10 text-gray-500">
              <h2 className="md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800">
                {courseData.courseTitle}
              </h2>
            <p
              className="pt-4 md:text-base text-sm"
              dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}
            />

        {/* Review & Rating */}
        <div className="flex items-center mt-1">
          <p className="mr-2">{rating}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < Math.floor(rating) ? assets.star : assets.star_blank}
                alt="star"
                className="w-4 h-4"
              />
            ))}
          </div>
          <p className="ml-2 text-sm text-blue-600">
            ({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'})  
          </p> 
          <p>
            {courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'students' : 'student'}
          </p>
        </div>
        <p className='text-sm'>
          Course By: <span className='text-blue-600 font-semibold underline'> Kazi Azizur Rahman</span>
        </p>

            <div className='pt-8 text-gray-800'>
              <h2 className='text-xl font-semibold'>Course Structure</h2>
              <div className='pt-5'>
                  {courseData.courseContent.map( (chapter, index)=> (
                     <div key={index} className='border border-gray-300 bg-white mb-2 rounded'>
                        <div className='flex items-center justify-between px-4 py-3 course-pointer select-none' 
                        onClick={()=> toggleSection(index)}>
                          <div className='flex items-center gap-2'>
                            <img className={`transform transition-transform ${openSection[index] ? 'rotate-180' : ''}`}
                            src={assets.down_arrow_icon} alt="arrow icon" />
                            <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                          </div>
                          <p className='text-sm md:text-default'>{chapter.chapterContent.length} Lectures - {calculateChapterTime(chapter)}</p>
                        </div>
                       <div className={`overflow-hidden transition-all duration-300 ${openSection[index] ? 
                          'max-h-96' : 'max-h-0'}`}>
                          <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                            {chapter.chapterContent.map((lecture, i)=> (
                              <li key={i} className='flex items-start gap-2 py-1'>
                                  <img src={assets.play_icon} alt="play icon" className='w-4 h-4 mt-1' />
                                  <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                                    <p>{lecture.lectureTitle}</p>
                                    <div className="flex gap-2">
                                      {lecture.isPreviewFree && (
                                          <p
                                          onClick={() =>
                                            setPlayerData({
                                              videoId: lecture.lectureUrl.split('/').pop(),
                                            })
                                          }
                                          className={`cursor-pointer ${
                                            playerData ? 'text-red-500' : 'text-blue-500'
                                          }`}
                                        >
                                         <b className='text-red-500'>Preview</b> 
                                        </p>

                                      )}
                                      <p>
                                        {humanizeDuration(lecture.lectureDuration * 60 * 1000, {
                                          units: ['h', 'm'],
                                        })}
                                      </p>
                                    </div>
                                  </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                     </div>
                  ))}
              </div>
            </div>
            <div className='mb-10 py-10 text-sm md:text-default'>
              <h3 className='text-xl font-semibold text-gray-800'>Course Description</h3>
              <p
                className="pt-3 rich-text"
                dangerouslySetInnerHTML={{ __html: courseData.courseDescription}}>
               </p>
            </div>
      </div>
      
      {/* Right Column */}



      <div className='max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-none overflow-hidden
       bg-white min-w-[300px] sm: min-w-[420px]'>
        {/* e.g., Course image or instructor info */}
       
          {playerData ? (
        <YouTube
          videoId={playerData.videoId}
          opts={{ playerVars: { autoplay: 1 } }}
          iframeClassName="w-full aspect-video"/>
          ) : (
        <img src={courseData.courseThumbnail} alt="" />
         )}

        <div className='p-5'>
            <div className='flex items-center gap-2'>
              
            <img className='w-3.5' src={assets.time_left_clock_icon} alt="time left clock icon" />
           
              <p className='text-red-500'><span className='font-medium'>5 Days</span> left at this price!</p>
            </div>
        </div>
        <div className='flex gap-3 items-center p-3'>
            <p className='text-gray-800 md:text-4xl text-2xl font-semibold'>{currency}{(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}</p>
            <p className='md:text-lg text-gray-500 line-through'>{currency}{courseData.coursePrice}</p>
            <p className='md:text-lg text-gray-500'>{courseData.discount}% off</p>
        </div>

        <div className="flex items-center text-sm md:text-default gap-4 p-3 md:pt-4 text-gray-500">
            {/* Rating */}
            <div className="flex items-center gap-1">
              <img src={assets.star} alt="Star icon" className="w-4 h-4" />
              <p>{calculateRating(courseData)}</p>
            </div>

            {/* Divider */}
            <div className="h-4 w-px bg-gray-500/40"></div>

                            
            <div className="flex items-center gap-1">
              <img src={assets.time_clock_icon} alt="clock icon" className="w-4 h-4" />
              
            <p>{calculateCourseDuration(courseData)}</p>
            </div>

            {/* Divider */}
            <div className="h-4 w-px bg-gray-500/40"></div>
            
            <div className="flex items-center gap-1 p">
              <img src={assets.lesson_icon} alt="lesson icon" className="w-4 h-4" />
            <p>{calculateNoOfLectures(courseData)} Lessons</p>
            </div>
        </div>

        <button className='md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 text-white font-medium m-3'>{isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}</button>
        <div className='pt-6 m-3'>
          <p className='md:text-xl text-lg font-medium text-gray-800'>What's in the course?</p>
          <ul className='ml-4 pt-2 text-sm md:text-default list-disc text-gray-500'>
            <li>Lifetime access with free upddates.</li>
            <li>Step-by-step, hands on project guidance.</li>
            <li>Downloadable recourses and source code.</li>
            <li>Quizzes to test your knowledge.</li>
            <li>Certificate of completion.</li>
          </ul>
        </div>
      </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default CourseDetails
