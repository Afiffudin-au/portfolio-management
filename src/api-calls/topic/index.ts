import { api_config } from '../../api-config'
import callAPI from '..'
const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/topics`
export const getTopic = async () => {
  const res = await callAPI({
    url,
    method: 'GET',
  })
  return res
}
export const postTopic = async (data: any) => {
  const res = await callAPI({
    url,
    method: 'POST',
    data: data,
  })
  return res
}
export const putTopic = async (data: any, id: string) => {
  const res = await callAPI({
    url: `${url}/${id}`,
    method: 'PUT',
    data: data,
  })
  return res
}
export const delTopic = async (id: string) => {
  const res = await callAPI({
    url: `${url}/${id}`,
    method: 'DELETE',
  })
  return res
}