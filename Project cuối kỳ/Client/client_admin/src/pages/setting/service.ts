import request from '@/utils/request'
import { API_URL } from '@/utils/utils'

type ParamType = {
  id?: number
  query?: string
  data?: any
}


export const getQrToScan = async (payload: ParamType) => {
  return request(`${API_URL}/employees/enalbe-2fa`, {
    method: 'GET',
  })
}
