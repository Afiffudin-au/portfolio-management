import React from 'react'
import Layout from '../Layout'
import Sidebar from '../Sidebar'
import TestimonialContent from './TestimonialContent'

function Testimonial() {
  return (
    <div className='testimonial'>
      <Layout>
        <Sidebar activeMenu='/testimonials' />
        <TestimonialContent />
      </Layout>
    </div>
  )
}

export default Testimonial
