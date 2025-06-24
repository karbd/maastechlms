import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
  <footer className='bg-gray-800 md:px-36 text-left w-full mt-10 text-white'>
  <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo} alt="logo" width={100} height={80} />
          <h3 className='mt-6 text-center md:text-left'>This is company text here..This is company text here..</h3>
        </div>
  <div className="flex flex-col items-center md:items-start w-full px-4">
      <h2 className="font-semibold mb-4 text-lg md:text-xl">Company</h2>
      <ul className="flex flex-wrap md:flex-col w-full justify-center md:justify-start text-sm gap-2 md:gap-0 md:space-y-2">
        <li><a href="#" className="text-blue-500 hover:underline">Home</a></li>
        <li><a href="#" className="text-blue-500 hover:underline">About</a></li>
        <li><a href="#" className="text-blue-500 hover:underline">Services</a></li>
        <li><a href="#" className="text-blue-500 hover:underline">Privacy Policy</a></li>
        <li><a href="#" className="text-blue-500 hover:underline">Contact</a></li>
      </ul>
  </div>
    <div className="flex flex-col items-center md:items-start w-full px-4 py-6">
      <h2 className="font-semibold mb-3 text-center md:text-left text-lg md:text-xl">
        Subscribe to Our Newsletter
      </h2>
      <h3 className="text-sm text-center md:text-left max-w-md">
        The Latest News, Articles and Resources Sent to Your Inbox Weekly!
      </h3>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-3 pt-4 w-full md:w-auto">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="border border-gray-500/30 bg-gray-800 text-white placeholder-white outline-none w-full md:w-44 h-10 rounded px-3 text-sm"
        />
        <input
          type="phone"
          placeholder="Enter Your Mobile"
          className="border border-gray-500/30 bg-gray-800 text-white placeholder-white outline-none w-full md:w-44 h-10 rounded px-3 text-sm"
        />
        <button className="bg-blue-600 w-full md:w-24 h-10 text-white rounded text-sm">
          Subscribe
        </button>
      </div>
    </div>
      </div>

      <h4 className="py-4 px-4 text-center text-xs md:text-sm text-white leading-relaxed">
         Copyright &copy; 2025, MaasTechBD. All Rights Reserved | Designed and Developed By:
        <a href="#" className="text-blue-500 hover:underline ml-1">Maas Tech BD</a>
      </h4>
    </footer>
  )
}

export default Footer
