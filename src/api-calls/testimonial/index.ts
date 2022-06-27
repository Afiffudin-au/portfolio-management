import { api_config } from '../../api-config'
import callAPI from '..'
const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/testimonials`
export const getTestimonial = async (controller:any) => {
  const res = await callAPI({
    url,
    method: 'GET',
    controller
  })
  return res
}
export const postTestimonial = async (data: any) => {
  const res = await callAPI({
    url,
    method: 'POST',
    data: data,
  })
  return res
}
export const putTestimonial = async (data: any, id: string) => {
  const res = await callAPI({
    url: `${url}/${id}`,
    method: 'PUT',
    data: data,
  })
  return res
}
export const delTestimonial = async (id: string) => {
  const res = await callAPI({
    url: `${url}/${id}`,
    method: 'DELETE',
  })
  return res
}