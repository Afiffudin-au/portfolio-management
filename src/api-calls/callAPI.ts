import axios, { AxiosRequestConfig } from 'axios'
import { getBase64Cookie } from '../cookie/authCookie'
const callAPI = async ({ url, method, data, }:AxiosRequestConfig)=>{
  const res = await axios({
    method: method,
    url: url,
    data :data,
    headers : {
      'Authorization' :`Basic ${getBase64Cookie()}` 
    }
  }).catch((err) => err.response)
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
    message: 'success',
    data: res.data
  }
  return successRes
}
export default callAPI