import { request } from '../utils/request'

export const userLoginAPI = (data: { username: string; password: string }) => {
  return request({
    url: '/api/account/login',
    method: 'POST',
    data,
  })
}