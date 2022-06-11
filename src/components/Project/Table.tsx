import React from 'react'
import {
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
} from 'react-icons/fc'
import useTableSorting from '../../hooks/useTableSorting'
import TableItem from './TableItem'
interface ProjectTypes {
  _id: string
  projectName: string
  description: string
  githubLink: string
  imgUrl: string
  tech: []
  previewLink: string
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
              onClick={() => setValueDirection('projectName')}
              scope='col'
              className='px-6 py-3 cursor-pointer'>
              <div className='font-bold flex items-center text-sm gap-1'>
                Project Name
                {direction === 'descending' ? (
                  <FcAlphabeticalSortingAz />
                ) : (
                  <FcAlphabeticalSortingZa />
                )}
              </div>
            </th>
            <th
              onClick={() => setValueDirection('description')}
              scope='col'
              className='px-6 py-3 cursor-pointer'>
              <div className='font-bold flex items-center text-sm gap-1'>
                description
                {direction === 'descending' ? (
                  <FcAlphabeticalSortingAz />
                ) : (
                  <FcAlphabeticalSortingZa />
                )}
              </div>
            </th>
            <th
              onClick={() => setValueDirection('githubLink')}
              scope='col'
              className='px-6 py-3 cursor-pointer'>
              <div className='font-bold flex items-center text-sm gap-1'>
                github
                {direction === 'descending' ? (
                  <FcAlphabeticalSortingAz />
                ) : (
                  <FcAlphabeticalSortingZa />
                )}
              </div>
            </th>
            <th scope='col' className='px-6 py-3'>
              Img
            </th>
            <th scope='col' className='px-6 py-3'>
              Preview
            </th>
            <th scope='col' className='px-6 py-3'>
              Tech
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orderData?.map((item: ProjectTypes) => (
            <TableItem
              handleRefresh={handleRefresh}
              id={item._id}
              imgUrl={item.imgUrl}
              description={item.description}
              githubLink={item.githubLink}
              previewLink={item.previewLink}
              projectName={item.projectName}
              tech={item.tech}
              key={item._id}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
