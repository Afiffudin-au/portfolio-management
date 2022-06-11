import React from 'react'
import ReactDom from 'react-dom'
import EditForm from './EditForm'
interface ModalProps {
  name: string
  description: string
  imgUrl: string
  id: string
  open: boolean
  onClose: () => void
  handleRefresh?: () => void
  setIsOpenModal: any
}
function Modal({
  open,
  onClose,
  name,
  description,
  id,
  imgUrl,
  handleRefresh,
  setIsOpenModal,
}: ModalProps) {
  if (!open) return null
  return ReactDom.createPortal(
    <>
      <div className='fixed top-0 right-0 left-0 bottom-0 bg-slate-400 opacity-70 z-50' />
      <div
        id='popup-modal'
        className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center'>
        <div className='relative p-4 w-full max-w-2xl h-full md:h-auto'>
          <div className='relative bg-white rounded-lg shadow '>
            <div className='flex justify-between items-start rounded-t'>
              <button
                onClick={onClose}
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                data-modal-toggle='defaultModal'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
              </button>
            </div>
            <EditForm
              handleRefresh={handleRefresh}
              name={name}
              id={id}
              description={description}
              imgUrl={imgUrl}
              setIsOpenModal={setIsOpenModal}
            />
          </div>
        </div>
      </div>
    </>,
    document.getElementById('portal')!
  )
}

export default Modal
