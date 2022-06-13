import React from 'react'
import ReactPaginate from 'react-paginate'

function Pagenation({
  pageCount,
  handlePageClick,
}: {
  pageCount: number
  handlePageClick: (e: any) => void
}) {
  return (
    <div className='flex justify-end'>
      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'inline-flex -space-x-px mb-3 mt-3 mr-2'}
        breakLinkClassName={
          'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300'
        }
        pageLinkClassName={
          'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
        }
        previousLinkClassName={
          'py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
        }
        nextLinkClassName={
          'py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
        }
        activeLinkClassName={'text-indigo-600 bg-indigo-50'}
      />
    </div>
  )
}

export default Pagenation
