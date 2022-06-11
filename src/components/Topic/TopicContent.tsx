import React from 'react'
import Table from './Table'
import TopicForm from './TopicForm'
import { BiRefresh } from 'react-icons/bi'
import { getTopic } from '../../api-calls/topic'
import useGetSpecificData from '../../hooks/useGetSpecificData'
function TopicContent() {
  const { data, handleRefresh } = useGetSpecificData(getTopic)
  return (
    <div className='py-2 w-9/12 mx-auto'>
      <button
        onClick={handleRefresh}
        type='button'
        className='font-large mb-5 font-semibold text-white bg-pink-500 py-2 px-5 rounded-sm shadow-sm inline-flex items-center gap-x-1'>
        <BiRefresh />
        Refresh
      </button>
      <Table data={data} handleRefresh={handleRefresh} />
      <TopicForm handleRefresh={handleRefresh} />
    </div>
  )
}

export default TopicContent
