import { message } from 'antd'
import type { Effect, Reducer } from 'umi'
import { formatMessage } from 'umi'
import type { TypeListProject } from './data'
import {
  getListProjects,
  createProject,
  editProject,
  deleteProject,
  searchProject,
} from './service'

type Model = {
  namespace: 'projects'
  state: TypeListProject
  reducers: {
    saveListProject: Reducer<TypeListProject>
  }
  effects: {
    getListProjects: Effect
    searchProject: Effect
    createProject: Effect
    editProject: Effect
    deleteProject: Effect
  }
}

export default <Model>{
  namespace: 'projects',
  state: {
    status: 400,
  },
  reducers: {
    saveListProject(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: {
    *getListProjects({ payload }, { call, put }) {
      try {
        const response = yield call(getListProjects, payload)
        yield put({
          type: 'saveListProject',
          payload: { response },
        })
        if (response.status !== 200) throw new Error('')
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
    *searchProject({ payload }, { call, put }) {
      try {
        const response = yield call(searchProject, payload)
        yield put({
          type: 'saveListProject',
          payload: { ...response, count: response.total },
        })
        if (response.status !== 200) throw new Error('')
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
    *createProject({ payload }, { call }) {
      try {
        const response = yield call(createProject, payload)
        if (response.status !== 200) throw new Error('')
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
    *editProject({ payload }, { call }) {
      try {
        const response = yield call(editProject, payload)
        if (response.status !== 200) throw new Error('')
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
    *deleteProject({ payload }, { call }) {
      console.log('🚀 ~ file: model.ts ~ line 83 ~ *deleteProject ~ payload', payload)
      try {
        const response = yield call(deleteProject, payload)
        if (response.status !== 200) throw new Error('')
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
  },
}
