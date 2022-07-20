import { message } from 'antd'
import type { Effect, Reducer } from 'umi'
import { formatMessage } from 'umi'
import type { TypeProfile, TypeTreatment, TypeUser } from './data'
import { getProfile, updateProfile, uploadAvatar, getTreatment, updateTreatment, addBank, updateBank } from './service'

type Model = {
  namespace: 'profile'
  state: TypeProfile
  reducers: {
    saveProfile: Reducer<TypeUser>
    saveTreatment: Reducer<TypeTreatment>
    saveAvatar: Reducer<TypeUser>
  }
  effects: {
    getProfile: Effect
    getTreatment: Effect
    updateProfile: Effect
    updateTreatment: Effect
    uploadAvatar: Effect
    addBank: Effect
    updateBank: Effect
  }
}

export default <Model>{
  namespace: 'profile',
  state: {},
  reducers: {
    saveProfile(state, { payload }) {
      return {
        ...state,
        user: {
          ...payload,
        },
      }
    },
    saveTreatment(state, { payload }) {
      return {
        ...state,
        treatment:{
          ...payload,
        },
      }
    },
    saveAvatar(state, { payload }) {
      return {
        ...state,
        avatar: {
          ...payload,
        },
      }
    },
  },
  effects: {
    *getProfile({ payload }, { call, put }) {
      try {
        const response = yield call(getProfile, payload)
        yield put({
          type: 'saveProfile',
          payload: response.data || {},
        })
      } catch (error) {
        yield put({
          type: 'saveProfile',
          payload: error.data,
        })
      }
    },
    *getTreatment({ payload }, { call, put }) {
      try {
        const response = yield call(getTreatment, payload)
        yield put({
          type: 'saveTreatment',
          payload: response.data,
        })
      } catch (error) {
        //
      }
    },
    *updateTreatment({ payload }, { call, put }) {
      try {
        const response = yield call(updateTreatment, payload)
        if (response.status !== 200) {
          throw new Error()
        } else {
          yield put({
            type: 'saveTreatment',
            payload: response.data,
          })
          message.success(formatMessage({ id: 'button.update.success' }))
        }
      } catch (error) {
        message.error('Cập nhập không thành công')
      }
    },
    *updateProfile({ payload }, { call, put }) {
      try {
        const response = yield call(updateProfile, payload)
        if (response.status !== 200) {
          message.error('Email đã tồn tại')
          throw new Error()
        } else {
          yield put({
            type: 'saveProfile',
            payload: response.data,
          })
          message.success(formatMessage({ id: 'button.update.success' }))
        }
      } catch (error) {
        message.error('Cập nhập không thành công')
      }
    },
    *uploadAvatar({ payload }, { call }) {
      try {
        const response = yield call(uploadAvatar, payload)
        return response
      } catch (error) {
        return error
      }
    },
    *addBank({ payload }, { call }) {
      try {
        const response = yield call(addBank, payload)
        if (response.status !== 200) {
          throw new Error()
        }
      } catch (error) {
        message.error('Tạo không thành công')
      }
    },
    *updateBank({ payload }, { call }) {
      try {
        const response = yield call(updateBank, payload)
        if (response.status !== 200) {
          throw new Error()
        }
        message.success('Cập nhập thành công')
      } catch (error) {
        message.error('Cập nhập không thành công')
      }
    },
  },
}
