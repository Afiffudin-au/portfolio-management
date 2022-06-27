import axios, { AxiosRequestConfig } from 'axios'
import { getBase64Cookie } from '../cookie/authCookie'
interface AxiosRequestConfigCustom extends AxiosRequestConfig{
  controller? : any
}
const callAPI = async ({ url, method, data,controller }:AxiosRequestConfigCustom)=>{
  const res = await axios({
    method: method,
    url: url,
    data :data,
    signal : controller ? controller.signal : false,
    headers : {
      'Authorization' :`Basic ${getBase64Cookie()}` 
    }
  }).catch((err) => err.response)
  if(controller && controller.signal.aborted){
    return {
      error : true,
      message: `Request Canceled`,
      data : null,
    }
  }
  if(res.status === 404){
    return {
      error : true,
      message: `${res.status} ${res.statusText}`,
      data : null,
    }
  }
  if (res.status > 300) {
    return {
      error: true,
      message: res.data.message,
      data: null,
    }
  }
  const successRes = {
    error: false,
    message: 'Success',
    data: res.data
  }
  return successRes
}
export default callAPI