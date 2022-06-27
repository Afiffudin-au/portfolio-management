import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import handleToast from '../../handleToast'

const useGetSpecificData = (getDataCallback: Function) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      const idToast = toast.loading('Please wait...')
      const res = await getDataCallback(controller)
      if (!res.error) {
        setData(res.data.data)
        handleToast(idToast, res)
      } else {
        handleToast(idToast, res)
      }
    }
    fetchData()
    return () => {
      controller.abort();
    };
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
