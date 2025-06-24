import React, { useEffect, useState } from 'react'
import { dummyStudentEnrolled } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'

const StudentsEnrolled = () => {

  const [enrolledStudents, setEnrolledStudents] = useState(null)

  const fetchEnrolledStudents = async () => {
  setEnrolledStudents(dummyStudentEnrolled)
  }

   useEffect(()=> {
      fetchEnrolledStudents()
    }, [])

  return enrolledStudents ? (
    <div className='min-h-screen flex flex-col items-start justify-between pb-10 md:p-8 md:pb-0 p-4 pt-8 mb-10'>
      <div className='w-full'>
        <h2 className='pb-4 text-lg font-medium'>Enrolled Students</h2>
        <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white 
          border border-gray-500/20'>
          <table className='md:table-auto table-fixed w-full overflow-hidden pb-4'>
              <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
              <tr>
                <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
                <th className='px-4 py-3 font-semibold'>Student Name</th>
                <th className='px-4 py-3 font-semibold'>Course Title</th>
                <th className='px-4 py-3 font-semibold hidden sm:table-cell'>Date</th>
              </tr>
              </thead>
              <tbody className='text-sm text-gray-500'>
                  {enrolledStudents.map((item, index)=> (
                    <tr key={index} className='border-b border-gray-500/20'>
                        <td className='px-4 py-3 items-center hidden sm:table-cell'>{index + 1}</td>
                        <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3'>
                            <img src={item.student.imageUrl} alt="Student Image" className='w-16 h-9 rounded-full' />
                            <span className='truncate'>{item.student.name}</span>
                        </td>
                        <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                        <td className='px-4 py-3 hidden sm:table-cell'>
                          {new Date(item.purchaseDate). toLocaleDateString()}
                        </td>
                    </tr>
                  ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  ):<Loading/>
}

export default StudentsEnrolled