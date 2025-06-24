import React, { useState } from 'react'
import searchIcon from '../../assets/search_icon.svg';
import { data, useNavigate } from 'react-router-dom';


const SearchBar = ({data}) => {

    const navigate = useNavigate()
    const [input, setInput] = useState(data ? data : '')
    const onSearchHandler = (e)=>{
      e.preventDefault()
      navigate('/course-list/' + input)
    }

  return (
         <form onSubmit={onSearchHandler} className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded">
              {/* Search Icon */}
              <img src={searchIcon} alt="Search Icon" className="md:w-auto w-10 px-3" />

              {/* Search Input */}
              <label htmlFor="searchInput" className="sr-only">Search for Courses</label>
              <input onChange={e => setInput(e.target.value) } value={input}
                id="searchInput"
                type="text"
                placeholder="Search For Courses"
                className="w-full h-full outline-none text-gray-500/80"
              />

              {/* Search Button */}
              <button type="submit" className="bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1 cursor-pointer">
                Search
              </button>
             
          </form>

          


        )
      }

      export default SearchBar