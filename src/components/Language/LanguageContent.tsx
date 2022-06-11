import React from 'react'
import { BiRefresh } from 'react-icons/bi'
import { getLanguage } from '../../api-calls/language'
import useGetSpecificData from '../../hooks/useGetSpecificData'
import LanguageForm from './LanguageForm'
import Table from './Table'

function LanguageContent() {
  const { data, handleRefresh } = useGetSpecificData(getLanguage)
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
      <LanguageForm handleRefresh={handleRefresh} />
    </div>
  )
}

export default LanguageContent
