import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import handleToast from '../../handleToast'

const useGetSpecificData = (getDataCallback: Function) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const idToast = toast.loading('Please wait...')
      const res = await getDataCallback()
      if (!res.error) {
        setData(res.data.data)
        handleToast(idToast, res)
      } else {
        handleToast(idToast, res)
      }
    }
    fetchData()
  }, [])
  const handleRefresh = async () => {
    const idToast = toast.loading('Refreshing...')
    const res = await getDataCallback()
    if (!res.error) {
      setData(res.data.data)
      handleToast(idToast, res)
    } else {
      handleToast(idToast, res)
    }
  }
  return {
    data,
    handleRefresh,
  }
}
export default useGetSpecificData
