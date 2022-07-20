import { message } from 'antd'
import { isEmpty } from 'lodash'
import type { Effect, Reducer } from 'umi'
import { formatMessage } from 'umi'
// import FileSaver from 'file-saver'
import type { TypeListSalary } from './data'
import {
  getSalary,
  confirmSalary,
  createSalary,
  sendNotification,
} from './service'

type Model = {
  namespace: 'salary'
  state: TypeListSalary
  reducers: {
    saveListSalary: Reducer<TypeListSalary>
  }
  effects: {
    getSalary: Effect
    confirmSalary: Effect
    creatSalary: Effect
    sendNotification: Effect
  }
}

export default <Model>{
  namespace: 'salary',
  state: {
    status: 200,
    dataError: {
      error: [],
    },
  },
  reducers: {
    saveListSalary(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: {
    *getSalary({ payload }, { call, put }) {
      try {
        const response = yield call(getSalary, payload)
        yield put({
          type: 'saveListSalary',
          payload: { ...response },
        })
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
    *confirmSalary({ payload }, { call }) {
      try {
        const response = yield call(confirmSalary, payload)
        if (response.status !== 200) throw new Error('')
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
    *creatSalary({ payload }, { call }) {
      try {
        const response = yield call(createSalary, payload)
        if (response.status !== 200) throw new Error('')
        if (!isEmpty(response.error)) {
          message.error('Đã có nhân viên bị lỗi lương')
        } else {
          message.success('Tạo dữ liệu thành công')
        }
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
    *sendNotification({ payload }, { call, put }) {
      try {
        const response = yield call(sendNotification, payload)
        response
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
  },
}
