import { toast } from 'react-toastify'
const handleToast = (idToast:any,res:any)=>{
  if (!res.error) {
    toast.update(idToast, {
      render: res.message,
      type: 'success',
      isLoading: false,
      autoClose: 1000,
    })
  } else {
    toast.update(idToast, {
      render: res.message,
      type: 'error',
      isLoading: false,
      autoClose: 1000,
    })
  }
}
export default handleToast