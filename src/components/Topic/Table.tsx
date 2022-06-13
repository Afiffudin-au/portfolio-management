import React from 'react'
import usePagenationTable from '../../hooks/usePagenationTable'
import useTableSorting from '../../hooks/useTableSorting'
import Pagenation from '../Pagenation'
import SortArrow from '../ShortArrow'
import TableItem from './TableItem'
interface TopicTypes {
  urlTopic: string
  _id: string
}

function Table({
  data,
  handleRefresh,
}: {
  data: any[]
  handleRefresh: () => void
}) {
  const { handlePageClick, pageCount, pagenatedData } = usePagenationTable(data)
  const { direction, orderData, setValueDirection, value } =
    useTableSorting(pagenatedData)
  return (
    <div className='shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 table-auto table-sort'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th
              onClick={() => setValueDirection('urlTopic')}
              scope='col'
              className='px-6 py-3 cursor-pointer'>
              <div className='font-bold flex items-center text-sm gap-1'>
                Topic
                {value === 'urlTopic' && <SortArrow direction={direction} />}
              </div>
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orderData?.map((item: TopicTypes) => (
            <TableItem
              handleRefresh={handleRefresh}
              id={item._id}
              urlTopic={item.urlTopic}
              key={item._id}
            />
          ))}
        </tbody>
      </table>
      <Pagenation handlePageClick={handlePageClick} pageCount={pageCount} />
    </div>
  )
}

export default Table
