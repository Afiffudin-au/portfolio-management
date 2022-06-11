import React from 'react'
import {
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
} from 'react-icons/fc'
import useTableSorting from '../../hooks/useTableSorting'
import TableItem from './TableItem'
interface LanguageTypes {
  urlProgLang: string
  _id: string
}
function Table({
  data,
  handleRefresh,
}: {
  data: any
  handleRefresh: () => void
}) {
  const { direction, orderData, setValueDirection } = useTableSorting(data)
  return (
    <div className='shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 table-auto'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th
              onClick={() => setValueDirection('urlProgLang')}
              scope='col'
              className='px-6 py-3 cursor-pointer'>
              <div className='font-bold flex items-center text-sm gap-1'>
                language url
                {direction === 'descending' ? (
                  <FcAlphabeticalSortingAz />
                ) : (
                  <FcAlphabeticalSortingZa />
                )}
              </div>
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orderData?.map((item: LanguageTypes) => (
            <TableItem
              handleRefresh={handleRefresh}
              id={item._id}
              urlProgLang={item.urlProgLang}
              key={item._id}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
