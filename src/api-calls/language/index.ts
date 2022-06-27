import { api_config } from '../../api-config'
import callAPI from '..'
const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/languages`
export const getLanguage = async (controller:any) => {
  const res = await callAPI({
    url,
    method: 'GET',
    controller
  })
  return res
}
export const postLanguage = async (data: any) => {
  const res = await callAPI({
    url,
    method: 'POST',
    data: data,
  })
  return res
}
export const putLanguage = async (data: any, id: string) => {
  const res = await callAPI({
    url: `${url}/${id}`,
    method: 'PUT',
    data: data,
  })
  return res
}
export const delLanguage = async (id: string) => {
  const res = await callAPI({
    url: `${url}/${id}`,
    method: 'DELETE',
  })
  return res
}