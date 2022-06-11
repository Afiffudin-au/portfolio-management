import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { putTestimonial } from '../../api-calls/testimonial'
import handleToast from '../../handleToast'
interface Inputs {
  name: string
  description: string
  imgUrl: string
}
interface EditFormProps {
  name: string
  description: string
  imgUrl: string
  id: string
  handleRefresh?: () => void
  setIsOpenModal: any
}
function EditForm({
  name,
  description,
  imgUrl,
  id,
  handleRefresh,
  setIsOpenModal,
}: EditFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm<Inputs>({
    defaultValues: {
      name: name,
      description: description,
      imgUrl: imgUrl,
    },
  })
  const handleSendForm: SubmitHandler<Inputs> = async (data) => {
    if (isDirty) {
      const idToast = toast.loading('Updating...')
      const res = await putTestimonial(data, id)
      if (!res.error) {
        handleToast(idToast, res)
        setIsOpenModal(false)
        handleRefresh?.()
      } else {
        handleToast(idToast, res)
      }
    } else {
      toast.warn('No changes!')
    }
  }
  return (
    <form
      className='my-3 w-full p-2 rounded-lg'
      onSubmit={handleSubmit(handleSendForm)}>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium text-gray-900'>
          Add a Name
        </label>
        <input
          type='text'
          className='border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
          placeholder='name...'
          {...register('name', {
            required: true,
            validate: (value) => {
              return !!value.trim()
            },
          })}
        />
      </div>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium text-gray-900'>
          Add a Desc
        </label>
        <input
          type='text'
          className='border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
          placeholder='descriptions...'
          {...register('description', {
            required: true,
            validate: (value) => {
              return !!value.trim()
            },
          })}
        />
      </div>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium text-gray-900'>
          Add a img url
        </label>
        <input
          type='text'
          className='border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
          placeholder='https://res.cloudinary.com/...'
          {...register('imgUrl', {
            required: true,
            validate: (value) => {
              return !!value.trim()
            },
          })}
        />
      </div>
      <button
        disabled={!isDirty}
        type='submit'
        className='text-white disabled:bg-slate-400 disabled:text-gray-300 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '>
        Submit
      </button>
    </form>
  )
}

export default EditForm
