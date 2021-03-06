import { useState, useEffect } from 'react'

const usePaginationTable = (data:any[]=[])=>{
  const [dataTable, setDataTable] = useState({
    paginatedData: [],
    pageCount: 0,
    offset: 0,
    perPage: 5,
    currentPage: 0,
  })

  const loadMoreData = () => {
    const slice: any = data.slice(
      dataTable.offset,
      dataTable.offset + dataTable.perPage
    )
    setDataTable({
      ...dataTable,
      pageCount: Math.ceil(data.length / dataTable.perPage),
      paginatedData: slice,
    })
  }
  const handlePageClick = (e: any) => {
    const selectedPage = e.selected
    const newOffset = selectedPage * dataTable.perPage
    dataTable.currentPage = selectedPage
    dataTable.offset = newOffset
    loadMoreData()
  }
  //get data
  useEffect(() => {
    const slice: any = data.slice(
      dataTable.offset,
      dataTable.offset + dataTable.perPage
    )
    setDataTable({
      ...dataTable,
      paginatedData: slice,
      pageCount: Math.ceil(data.length / dataTable.perPage),
    })
  }, [data])
  return{
    handlePageClick,
    paginatedData : dataTable.paginatedData,
    pageCount : dataTable.pageCount,
    currentPage : dataTable.currentPage
  }
}
export default usePaginationTable