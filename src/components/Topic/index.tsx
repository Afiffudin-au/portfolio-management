import React from 'react'
import Layout from '../Layout'
import Sidebar from '../Sidebar'
import TopicContent from './TopicContent'

function Topic() {
  return (
    <div className='topic'>
      <Layout>
        <Sidebar activeMenu='/topics' />
        <TopicContent />
      </Layout>
    </div>
  )
}

export default Topic
