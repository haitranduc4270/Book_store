import request from '@/utils/request'
import { API_URL } from '@/utils/utils'

type ParamType = {
  id?: number
  query?: string
  data?: any
}

export const getProfile = async (payload: ParamType) => {
  return request(`${API_URL}/employees/${payload.query}`)
}

export const updateProfile = async (payload: ParamType) => {
  return request(`${API_URL}/employees/${payload.query}`, {
    method: 'PATCH',
    data: payload.data,
  })
}

export const uploadAvatar = async (payload: ParamType) => {
  return request(`${API_URL}/employees/uploadImage/${payload.query}`, {
    method: 'POST',
    data: payload.data,
  })
}

export const getTreatment = async (payload: ParamType) => {
  return request(`${API_URL}/treatment/${payload.query}`)
}

export const updateTreatment = async (payload: ParamType) => {
  return request(`${API_URL}/treatment`, {
    method: 'POST',
    data: payload.data,
  })
}
export const addBank = async (payload: ParamType) => {
  return request(`${API_URL}/employees/payment`, {
    method: 'POST',
    data: payload.data,
  })
}
export const updateBank = async (payload: ParamType) => {
  return request(`${API_URL}/employees/payment/${payload.query}`, {
    method: 'PATCH',
    data: payload.data,
  })
}
