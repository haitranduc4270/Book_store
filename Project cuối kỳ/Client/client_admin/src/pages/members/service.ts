import request from '@/utils/request'
import { API_URL } from '@/utils/utils'

type ParamType = {
  id?: number
  query?: string
  data?: any
}

export const getMembers = async (payload: ParamType) => {
  return request(`${API_URL}/employees${payload.query}`)
}

export const createMember = async (payload: ParamType) => {
  return request(`${API_URL}/employees/register`, {
    method: 'POST',
    data: payload.data,
  })
}

export const editMember = async (payload: ParamType) => {
  return request(`${API_URL}/employees/${payload.id}`, {
    method: 'PATCH',
    data: payload.data,
  })
}

export const deleteMember = async (payload: ParamType) => {
  return request(`${API_URL}/employees`, {
    method: 'DELETE',
    data: payload.data,
  })
}

export const searchMember = async (payload: ParamType) => {
  return request(`${API_URL}/employees/search${payload.query}`, {
    method: 'POST',
    data: payload.data,
  })
}

