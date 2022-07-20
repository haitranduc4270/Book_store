import request from '@/utils/request'
import { API_URL } from '@/utils/utils'

type ParamType = {
  id?: number
  query?: string
  data?: any
}

export const getOT = async (payload: ParamType) => {
  return request(`${API_URL}/ots${payload.query}`)
}

export const approvedOrReject = async (payload: ParamType) => {
  return request(`${API_URL}/ots/${payload.query}`, {
    method: 'POST',
    data: payload.data,
  })
}
export const searchOT = async (payload: ParamType) => {
  return request(`${API_URL}/ots/${payload.query}`, {
    method: 'POST',
    data: payload.data,
  })
}
