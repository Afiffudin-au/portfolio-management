import {useState} from 'react'
const orderBy = (data: [], value: string, direction: string | null) => {
  if (data === undefined) return
  if (direction === 'ascending') {
    return [...data].sort((a: any, b: any) => (a[value] > b[value] ? 1 : -1))
  }
  if (direction === 'descending') {
    return [...data].sort((a: any, b: any) => (a[value] > b[value] ? -1 : 1))
  }
  return data
}
const useTableSorting = (data:any)=>{
  const [direction, setDirection] = useState<string | null>('')
  const [value, setValue] = useState<string>('')
  const orderData = orderBy(data, value, direction)
  const switchDirection = () => {
    if (!direction) {
      console.log('descending')
      setDirection('descending')
    } else if (direction === 'descending') {
      setDirection('ascending')
      console.log('ascending')
    } else {
      setDirection(null)
      console.log('not sorted')
    }
  }
  const setValueDirection = (value:string)=>{
    switchDirection()
    setValue(value)
  }
  return{
    direction,
    setValueDirection,
    orderData,
    value
  }
}
export default useTableSorting