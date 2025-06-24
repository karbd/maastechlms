import React from 'react'
import {assets, dummyTestimonial } from '../../assets/assets'

const TestimonialSection = () => {
  return (
    <div className="pb-14 px-4 sm:px-6 lg:px-8">
  <h2 className="text-2xl md:text-3xl font-medium text-gray-800 text-center">Testimonials</h2>
  <p className="text-sm md:text-base text-gray-500 mt-3 text-center md:text-center max-w-4xl mx-auto">
    Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.
  </p>

  <div className="mt-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {dummyTestimonial.map((testimonial, index) => (
      <div
        key={index}
        className="border border-gray-300 rounded-lg bg-white shadow-md overflow-hidden flex flex-col"
      >
        <div className="flex items-center gap-3 p-4">
          <img
            className="h-12 w-12 rounded-full"
            src={testimonial.image}
            alt={testimonial.name}
          />
          <div>
            <h3 className="text-base font-medium text-gray-800">{testimonial.name}</h3>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        </div>

        <div className="px-4 pb-4 flex-1">
          <div className="flex gap-0.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                alt="star"
                className="h-5"
              />
            ))}
          </div>
          <p className="text-sm text-gray-600">{testimonial.feedback}</p>
        </div>

        <a href="#" className="text-blue-500 underline px-4 pb-4 text-sm">
          Read More
        </a>
      </div>
    ))}
  </div>
</div>

  )
}

export default TestimonialSection