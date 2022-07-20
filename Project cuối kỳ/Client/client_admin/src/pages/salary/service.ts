import request from '@/utils/request'
import { API_URL } from '@/utils/utils'

type ParamType = {
  id?: number
  query?: string
  data?: any
}


export const getSalary = async (payload: ParamType) => {
  return request(`${API_URL}/salaries/${payload.query}?pageSize=999&pageNo=1`, {
    method: 'GET',
    data: payload.data,
  })
}

export const confirmSalary = async (payload: ParamType) => {
  return request(`${API_URL}/salaries/update/${payload.query}`, {
    method: 'POST',
    data: payload.data,
  })
}
export const createSalary = async (payload: ParamType) => {
  return request(`${API_URL}/salaries/caculate/${payload.query}`, {
    method: 'POST',
  })
}
export const sendNotification = async (payload: ParamType) => {
  return request(`${API_URL}/employees/send-notification`, {
    method: 'POST',
    data: payload.data,
  })
}
