import React from 'react'
import UserForm from './UserForm'

function UserContent() {
  return (
    <div className='py-2 w-9/12 mx-auto'>
      <p className='text-md text-gray-800 font-medium'>
        For the first time use http basic authentication to use portfolio
        management, http basic authentication is used as key for API calls. If
        the username and password are incorrect, the API call will be rejected.
        Username and password will be stored in cookies.
      </p>
      <UserForm />
    </div>
  )
}

export default UserContent
