import { api_config } from '../../api-config'
import callAPI from '..'
const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/projects`
export const getProject = async () => {
  const res = await callAPI({
    url,
    method: 'GET',
  })
  return res
}
export const postProject = async (data: any) => {
  const res = await callAPI({
    url,
    method: 'POST',
    data: data,
  })
  return res
}
export const putProject = async (data: any, id: string) => {
  const res = await callAPI({
    url: `${url}/${id}`,
    method: 'PUT',
    data: data,
  })
  return res
}
export const delProject = async (id: string) => {
  const res = await callAPI({
    url: `${url}/${id}`,
    method: 'DELETE',
  })
  return res
}