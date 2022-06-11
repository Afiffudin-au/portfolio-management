import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

export const getBase64Cookie = () => {
  const cookie: any = Cookies.get('auth')
    ? Cookies.get('auth')
    : null
  return cookie
}
export const setCookie = (data: any) => {
  const userBase64 = btoa(`${data.username}:${data.password}`)
  Cookies.set('auth', userBase64, { expires: 99999 })
  if (Cookies.get('auth')) {
    toast.success('Basic authentication has been stored in cookies')
  } else {
    toast.error('Basic authentication cannot be stored in cookies')
  }
}
