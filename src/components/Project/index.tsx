import React from 'react'
import Layout from '../Layout'
import Sidebar from '../Sidebar'
import ProjectContent from './ProjectContent'

function Project() {
  return (
    <div className='project'>
      <Layout>
        <Sidebar activeMenu='/projects' />
        <ProjectContent />
      </Layout>
    </div>
  )
}

export default Project
