import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { postCheckBasicAuth } from '../../api-calls/checkBasicAuth'
import { setCookie } from '../../cookie/authCookie'
import handleToast from '../../handleToast'
interface Inputs {
  username: string
  password: string
}
function UserForm() {
  const { register, handleSubmit, reset } = useForm<Inputs>()
  const navigate = useNavigate()
  const handleSendForm: SubmitHandler<Inputs> = async (data) => {
    const idToast = toast.loading('Checking...')
    const res = await postCheckBasicAuth(data)
    if (!res.error) {
      if (res.data.data.found) {
        handleToast(idToast, res)
        toast.success('authentication is correct')
        reset()
        setCookie(data)
        navigate('/control', { replace: true })
      }
    } else {
      if (res.message) {
        handleToast(idToast, res)
      }
    }
  }
  return (
    <form
      className='my-5 shadow p-2 rounded-lg max-w-md mx-auto'
      onSubmit={handleSubmit(handleSendForm)}>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium text-gray-900'>
          Username
        </label>
        <input
          type='text'
          className='border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
          placeholder='username...'
          {...register('username', {
            required: true,
            validate: (value) => {
              return !!value.trim()
            },
          })}
        />
      </div>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium text-gray-900'>
          Password
        </label>
        <input
          type='password'
          className='border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
          placeholder='password...'
          {...register('password', {
            required: true,
            validate: (value) => {
              return !!value.trim()
            },
          })}
        />
      </div>
      <button
        type='submit'
        className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-9/12 mx-auto block px-5 py-2.5 text-center '>
        Save basic auth
      </button>
    </form>
  )
}

export default UserForm
