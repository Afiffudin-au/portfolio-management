import { api_config } from '../../api-config'
import callAPI from '..'
const url = `${api_config.BASE_URL}/${api_config.API_VERSION}/check-basic-auth`
export const postCheckBasicAuth = async (data: any) => {
  const res = await callAPI({
    url,
    method: 'POST',
    data: data,
  })
  return res
}