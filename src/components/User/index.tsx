import Cookies from 'js-cookie'
import React from 'react'
import Layout from '../Layout'
import Sidebar from '../Sidebar'
import UserContent from './UserContent'

function User() {
  if (Cookies.get('auth')) {
    return (
      <div className='User'>
        <Layout>
          <Sidebar activeMenu='/users' />
          <UserContent />
        </Layout>
      </div>
    )
  }
  return (
    <div className='User'>
      <UserContent />
    </div>
  )
}

export default User
