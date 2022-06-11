import React from 'react'
import Layout from '../Layout'
import Sidebar from '../Sidebar'
import LanguageContent from './LanguageContent'

function Language() {
  return (
    <div className='language'>
      <Layout>
        <Sidebar activeMenu='/languages' />
        <LanguageContent />
      </Layout>
    </div>
  )
}

export default Language
