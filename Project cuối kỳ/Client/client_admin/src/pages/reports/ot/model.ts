import { message } from 'antd'
import type { Effect, Reducer } from 'umi'
import { formatMessage } from 'umi'
import type { TypeListOT } from './data'
import { approvedOrReject, getOT, searchOT } from './service'

type Model = {
  namespace: 'ot'
  state: TypeListOT
  reducers: {
    saveListOT: Reducer<TypeListOT>
  }
  effects: {
    getOT: Effect
    searchOT: Effect
    approvedOrReject: Effect
  }
}

export default <Model>{
  namespace: 'ot',
  state: {
    status: 200,
  },
  reducers: {
    saveListOT(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: {
    *getOT({ payload }, { call, put }) {
      try {
        const response = yield call(getOT, payload)
        yield put({
          type: 'saveListOT',
          payload: response,
        })
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
    *approvedOrReject({ payload }, { call }) {
      try {
        yield call(approvedOrReject, payload)
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
    *searchOT({ payload }, { call, put }) {
      try {
        const response = yield call(searchOT, payload)
        yield put({
          type: 'saveListOT',
          payload: response,
        })
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
  },
}
