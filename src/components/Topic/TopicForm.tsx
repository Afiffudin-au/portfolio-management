import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { postTopic } from '../../api-calls/topic'
import handleToast from '../../handleToast'
interface Inputs {
  urlTopic: string
}
function TopicForm({ handleRefresh }: { handleRefresh: () => void }) {
  const { register, handleSubmit, reset } = useForm<Inputs>()
  const handleSendForm: SubmitHandler<Inputs> = async (data) => {
    const idToast = toast.loading('Adding...')
    const res = await postTopic(data)
    if (!res.error) {
      reset()
      handleToast(idToast, res)
      handleRefresh()
    } else {
      handleToast(idToast, res)
    }
  }
  return (
    <form
      className='my-5 border-pink-400 border-2 w-full p-2 rounded-lg'
      onSubmit={handleSubmit(handleSendForm)}>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium text-gray-900'>
          Add a Topic Url
        </label>
        <input
          type='text'
          className='border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
          placeholder='https://github.com/username/repo'
          {...register('urlTopic', {
            required: true,
            validate: (value) => {
              return !!value.trim()
            },
          })}
        />
      </div>
      <button
        type='submit'
        className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '>
        Submit
      </button>
    </form>
  )
}

export default TopicForm
