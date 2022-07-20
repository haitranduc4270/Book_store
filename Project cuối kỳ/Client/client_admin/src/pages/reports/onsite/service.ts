import request from '@/utils/request'
import { API_URL } from '@/utils/utils'

type ParamType = {
  id?: number
  query?: string
  data?: any
}

export const getOnsite = async (payload: ParamType) => {
  return request(`${API_URL}/onsites${payload.query}`)
}

export const approvedOrReject = async (payload: ParamType) => {
  return request(`${API_URL}/onsites/${payload.query}`, {
    method: 'POST',
    data: payload.data,
  })
}
export const searchOnsite = async (payload: ParamType) => {
  return request(`${API_URL}/onsites/${payload.query}`, {
    method: 'POST',
    data: payload.data,
  })
}

