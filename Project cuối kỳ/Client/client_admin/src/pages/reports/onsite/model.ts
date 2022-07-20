import { message } from 'antd'
import type { Effect, Reducer } from 'umi'
import { formatMessage } from 'umi'
import type { TypeListOnsite } from './data'
import {
  getOnsite,
  approvedOrReject,
  searchOnsite,
} from './service'

type Model = {
  namespace: 'onsite'
  state: TypeListOnsite
  reducers: {
    saveListOnsite: Reducer<TypeListOnsite>
  }
  effects: {
    getOnsite: Effect
    approvedOrReject: Effect
    searchOnsite: Effect
  }
}

export default <Model>{
  namespace: 'onsite',
  state: {
    status: 200,
  },
  reducers: {
    saveListOnsite(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: {
    *getOnsite({ payload }, { call, put }) {
      try {
        const response = yield call(getOnsite, payload)
        yield put({
          type: 'saveListOnsite',
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
    *searchOnsite({ payload }, { call, put }) {
      try {
        const response = yield call(searchOnsite, payload)
        yield put({
          type: 'saveListOnsite',
          payload: response,
        })
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
  },
}
