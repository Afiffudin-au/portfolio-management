import React from 'react'
import { BiRefresh } from 'react-icons/bi'
import { getProject } from '../../api-calls/project'
import useGetSpecificData from '../../hooks/useGetSpecificData'
import ProjectForm from './ProjectForm'
import Table from './Table'

function ProjectContent() {
  const { data, handleRefresh } = useGetSpecificData(getProject)
  return (
    <div className='py-2 w-full'>
      <button
        onClick={handleRefresh}
        type='button'
        className='font-large mb-5 font-semibold text-white bg-pink-500 py-2 px-5 rounded-sm shadow-sm inline-flex items-center gap-x-1'>
        <BiRefresh />
        Refresh
      </button>
      <Table data={data} handleRefresh={handleRefresh} />
      <ProjectForm handleRefresh={handleRefresh} />
    </div>
  )
}

export default ProjectContent
