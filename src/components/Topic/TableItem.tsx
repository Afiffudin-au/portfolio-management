import React from 'react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { delTopic, putTopic } from '../../api-calls/topic'
import handleToast from '../../handleToast'
interface TableItemProps {
  urlTopic: string
  id: string
  handleRefresh?: () => void
}
interface Inputs {
  urlTopic: string
}
function TableItem({ urlTopic, id, handleRefresh }: TableItemProps) {
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm<Inputs>({
    defaultValues: {
      urlTopic: urlTopic,
    },
  })
  const [edit, setEdit] = useState(false)
  const handleUpdate: SubmitHandler<Inputs> = async (data) => {
    if (isDirty) {
      const idToast = toast.loading('Updating...')
      const res = await putTopic(data, id)
      if (!res.error) {
        handleToast(idToast, res)
        setEdit(false)
        handleRefresh?.()
      } else {
        handleToast(idToast, res)
        setEdit(false)
      }
    } else {
      toast.warn('No changes')
    }
  }
  const handleDelete = async () => {
    const idToast = toast.loading('Deleting...')
    const res = await delTopic(id)
    if (!res.error) {
      handleToast(idToast, res)
      setEdit(false)
      handleRefresh?.()
    } else {
      handleToast(idToast, res)
      setEdit(false)
    }
  }
  return (
    <tr className='bg-white border-b '>
      {edit ? (
        <td className='px-6 py-4 font-medium text-gray-900'>
          <form onSubmit={handleSubmit(handleUpdate)}>
            <input
              type='text'
              className='border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
              placeholder='https://api.github.com/repos/username/example-repo/topics'
              {...register('urlTopic', {
                validate: (value) => {
                  return !!value.trim()
                },
              })}
            />
            <button type='submit' className='hidden'>
              submit
            </button>
          </form>
        </td>
      ) : (
        <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap truncate max-w-3xl'>
          {urlTopic}
        </td>
      )}

      <td className='px-6 py-4 text-right flex items-center gap-2 justify-end'>
        {!edit && (
          <button
            onClick={() => setEdit(!edit)}
            type='button'
            className='font-medium text-white bg-blue-500 py-2 px-5 rounded-sm shadow-sm'>
            Edit
          </button>
        )}

        {edit && (
          <>
            <button
              onClick={() => setEdit(false)}
              type='button'
              className='font-medium text-white bg-blue-500 py-2 px-5 rounded-sm shadow-sm'>
              Cancel
            </button>
            <button
              onClick={handleDelete}
              type='button'
              className='font-medium text-white bg-red-600 py-2 px-5 rounded-sm shadow-sm'>
              Remove
            </button>
            <button
              onClick={handleSubmit(handleUpdate)}
              type='button'
              className='font-medium text-white bg-blue-500 py-2 px-5 rounded-sm shadow-sm'>
              Save
            </button>
          </>
        )}
      </td>
    </tr>
  )
}

export default TableItem
