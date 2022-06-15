import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { delProject } from '../../api-calls/project'
import handleToast from '../../handleToast'
import Modal from './Modal'
interface TableItemProps {
  id: string
  projectName: string
  description: string
  githubLink: string
  imgUrl: string
  tech: []
  previewLink: string
  handleRefresh?: () => void
}
function TableItem({
  id,
  projectName,
  description,
  githubLink,
  tech,
  imgUrl,
  previewLink,
  handleRefresh,
}: TableItemProps) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const handleDelete = async () => {
    const idToast = toast.loading('Deleting...')
    const res = await delProject(id)
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
        <td className='px-2 py-2 font-medium text-sm text-gray-900 break-all'>
          {projectName}
        </td>
        <td className='px-2 py-2 font-medium text-sm text-gray-900'>
          <div
            className='text-justify max-h-60 overflow-y-scroll'
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </td>

        <td className='px-2 py-2 font-medium text-sm text-gray-900 truncate max-w-150px'>
          <a
            className='text-blue-500 underline hover:text-blue-600'
            href={githubLink}
            target='_blank'
            rel='noreferrer'>
            {githubLink}
          </a>
        </td>
        <td className='px-2 py-2 font-medium text-sm text-gray-900 truncate max-w-150px'>
          <a
            className='text-blue-500 underline hover:text-blue-600'
            href={imgUrl}
            target='_blank'
            rel='noreferrer'>
            {imgUrl}
          </a>
        </td>
        <td className='px-2 py-2 font-medium text-sm text-gray-900 truncate max-w-150px'>
          <a
            className='text-blue-500 underline hover:text-blue-600'
            href={previewLink}
            target='_blank'
            rel='noreferrer'>
            {previewLink}
          </a>
        </td>
        <td className='px-2 py-2 font-medium text-sm text-gray-900'>
          <div className='max-w-100px truncate'>
            {tech.map((item, i) => (
              <a
                key={item + i}
                href={`https://www.google.com/search?q=${item}`}
                target='_blank'
                rel='noreferrer'>
                <span
                  key={item + i}
                  className='inline-flex m-1 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-purple-600 rounded'>
                  {item}
                </span>
              </a>
            ))}
          </div>
        </td>
        <td className='px-2 py-2 font-medium text-sm text-gray-900'>
          <div className='flex gap-2'>
            <button
              onClick={() => setIsOpenModal(true)}
              type='button'
              className='font-medium text-sm text-white bg-blue-500 py-2 px-5 rounded-sm shadow-sm'>
              Edit
            </button>
            <button
              onClick={handleDelete}
              type='button'
              className='font-medium text-sm text-white bg-red-500 py-2 px-5 rounded-sm shadow-sm'>
              Delete
            </button>
          </div>
        </td>
      </tr>
      {isOpenModal && (
        <Modal
          githubLink={githubLink}
          previewLink={previewLink}
          projectName={projectName}
          tech={tech}
          description={description}
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
