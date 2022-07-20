import request from '@/utils/request'
import { API_URL } from '@/utils/utils'

type TypeParams = {
  id?: number
  query?: string
  data?: any
}

export const getListProjects = async (payload: TypeParams) => {
  return request(`${API_URL}/books`)
}

export const searchProject = async (payload: TypeParams) => {
  return request(`${API_URL}/projects${payload.query}`, {
    method: 'POST',
    data: payload.data,
  })
}

export const createProject = async (payload: TypeParams) => {
  return request(`${API_URL}/projects/books`, {
    method: 'POST',
    data: payload.data,
  })
}

export const editProject = async (payload: TypeParams) => {
  return request(`${API_URL}/projects/update/${payload.id}`, {
    method: 'PATCH',
    data: payload.data,
  })
}

export const deleteProject = async (payload: TypeParams) => {
  return request(`${API_URL}/books?bookId=${payload.id}`, {
    method: 'DELETE',
    data: payload.data,
  })
}
