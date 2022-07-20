import request from 'umi-request'
import { API_URL } from '@/utils/utils'

type ParamType = {
  id?: number
  query?: string
  data?: any
}

export const login = async (payload: ParamType) => {
  return request(`${API_URL}/login`, {
    method: 'POST',
    data: payload.data,
  })
}

export const loginRequest2fa = async (payload: ParamType) => {
  return request(`${API_URL}/login/admin`, {
    method: 'POST',
    data: payload.data,
  })
}

export const getVerify = async (payload: ParamType) => {
  return request(`${API_URL}/login/verify-token`, {
    method: 'POST',
    data: payload.data,
  })
}
