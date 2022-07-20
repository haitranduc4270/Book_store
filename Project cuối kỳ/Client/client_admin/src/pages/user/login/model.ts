import { getPageQuery } from '@/utils/utils'
import { message } from 'antd'
import { stringify } from 'querystring'
import type { Effect, Reducer } from 'umi'
import { history } from 'umi'
import type { TypeUserAndLogin, TypeUserRequest2fa } from './data'
import { getVerify, loginRequest2fa } from './service'

type Model = {
  namespace: string
  state: TypeUserAndLogin
  reducers: {
    saveLogin: Reducer<TypeUserAndLogin>
    saveIdAndEmail: Reducer<TypeUserRequest2fa>
  }
  effects: {
    getVerify: Effect
    logout: Effect
    loginRequest2fa: Effect
  }
}

export default <Model>{
  namespace: 'userAndLogin',
  state: {
    status: 200,
    data: {
      accessToken: localStorage.getItem('token') || '',
      name: JSON.parse(localStorage.getItem('name') || '"User"'),
    },
  },
  reducers: {
    saveLogin(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
    saveIdAndEmail(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: {
    *getVerify({ payload }, { call, put }) {
      try {
        const response = yield call(getVerify, payload)
        yield put({
          type: 'saveLogin',
          payload: {
            ...response,
            data: { accessToken: response.data?.access_token, ...response.data },
          },
        })
        if (response.data?.access_token) {
          if (!response.data.name) {
            message.error('tên người dùng bị trống')
          }
          yield localStorage.setItem('token', response.data?.access_token)
          yield localStorage.setItem('name', JSON.stringify(response.data.name))
          setTimeout(() => {
            const urlParams = new URL(window.location.href)
            const params = getPageQuery()
            let { redirect } = params as { redirect: string }
            if (redirect) {
              const redirectUrlParams = new URL(redirect)
              if (redirectUrlParams.origin === urlParams.origin) {
                redirect = redirect.substr(urlParams.origin.length)
                if (redirect.match(/^\/.*#/)) {
                  redirect = redirect.substr(redirect.indexOf('#') + 1)
                }
              } else {
                window.location.href = redirect
                return
              }
            }
            history.replace(redirect || '/')
          }, 100)
        }
      } catch (error) {
        yield put({
          type: 'saveLogin',
          payload: error.data,
        })
      }
    },
    *loginRequest2fa({ payload }, { call, put }) {
      try {
        const response = yield call(loginRequest2fa, payload)
        yield put({
          type: 'saveIdAndEmail',
          payload: { ...response, data: { ...response.data } },
        })
        const { token } = response
        localStorage.setItem('token', token)
        history.replace('/members')
      } catch (error) {
        yield put({
          type: 'saveIdAndEmail',
        })
      }
    },
    *logout() {
      const { redirect } = getPageQuery()
      if (window.location.pathname !== '/user/login' && !redirect) {
        yield localStorage.removeItem('token')
        history.replace({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      }
    },
  },
}
