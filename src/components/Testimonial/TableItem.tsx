import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { delTestimonial } from '../../api-calls/testimonial'
import handleToast from '../../handleToast'
import Modal from './Modal'
interface TableItemProps {
  name: string
  id: string
  description: string
  imgUrl: string
  handleRefresh?: () => void
}
function TableItem({
  name,
  id,
  description,
  imgUrl,
  handleRefresh,
}: TableItemProps) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const handleDelete = async () => {
    const idToast = toast.loading('Deleting...')
    const res = await delTestimonial(id)
    if (!res.error) {
      handleToast(idToast, res)
      handleRefresh?.()
    } else {
      handleToast(idToast, res)
    }
  }
  return (
    <>
      <tr className='bg-white border-b'>
        <td className='px-6 py-4 font-medium text-gray-900 truncate max-w-xs'>
          {name}
        </td>
        <td className='px-6 py-4 font-medium text-gray-900 truncate max-w-xs'>
          {description}
        </td>
        <td className='px-6 py-4 font-medium text-gray-900 truncate max-w-xs'>
          {imgUrl}
        </td>
        <td className='px-6 py-4 font-medium text-gray-900 max-w-xs flex items-center justify-start gap-2'>
          <button
            onClick={() => setIsOpenModal(true)}
            type='button'
            className='font-medium text-white bg-blue-500 py-2 px-5 rounded-sm shadow-sm'>
            Edit
          </button>
          <button
            onClick={handleDelete}
            type='button'
            className='font-medium text-white bg-red-500 py-2 px-5 rounded-sm shadow-sm'>
            Delete
          </button>
        </td>
      </tr>
      {isOpenModal && (
        <Modal
          description={description}
          name={name}
          imgUrl={imgUrl}
          id={id}
          open={isOpenModal}
          handleRefresh={handleRefresh}
          setIsOpenModal={setIsOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
    </>
  )
}

export default TableItem
