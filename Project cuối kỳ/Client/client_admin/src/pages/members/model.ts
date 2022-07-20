import { message } from 'antd'
import type { Effect, Reducer } from 'umi'
import { formatMessage } from 'umi'
import type { TypeListMember } from './data'
import {
  getMembers,
  createMember,
  editMember,
  deleteMember,
  searchMember,
} from './service'

type Model = {
  namespace: 'members'
  state: TypeListMember
  reducers: {
    saveListMember: Reducer<TypeListMember>
  }
  effects: {
    getMembers: Effect
    createMember: Effect
    editMember: Effect
    deleteMember: Effect
    searchMember: Effect
  }
}

export default <Model>{
  namespace: 'members',
  state: {
    statusCode: 200,
  },
  reducers: {
    saveListMember(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: {
    *getMembers({ payload }, { call, put }) {
      try {
        const response = yield call(getMembers, payload)
        yield put({
          type: 'saveListMember',
          payload: { ...response },
        })
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
    *createMember({ payload }, { call }) {
      try {
        const response = yield call(createMember, payload)
        if (response?.status !== 200) throw new Error('')
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
    *editMember({ payload }, { call }) {
      try {
        yield call(editMember, payload)
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
    *deleteMember({ payload }, { call }) {
      try {
        const response = yield call(deleteMember, payload)
        if (response?.status !== 200) throw new Error('')
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
    *searchMember({ payload }, { call, put }) {
      try {
        const response = yield call(searchMember, payload)
        yield put({
          type: 'saveListMember',
          payload: { ...response },
        })
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
  },
}
