import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-4 sm:px-6 md:px-8 lg:px-0 text-center md:text-left">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
    Learn Anything, Anytime, Anywhere!
  </h1>
  <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
    Unlock the power of learning with flexible, on-demand access to courses that fit your schedule.
    Learn anything, anytime, anywhere – your journey starts here!
  </p>
  
  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4">
    <button className="px-8 sm:px-10 py-3 rounded-md text-white bg-blue-600 w-full sm:w-auto">
      Get Started
    </button>
    <button className="flex items-center gap-2 text-blue-600 font-medium">
      Learn More <img src={assets.arrow_icon} alt="arrow_icon" className="w-4 h-4" />
    </button>
  </div>
</div>

  )
}

export default CallToAction