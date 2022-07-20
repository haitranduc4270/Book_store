import { message } from 'antd'
import { Effect, formatMessage, Reducer } from 'umi'
import { TypeDataGenerateQR } from './data'
// import FileSaver from 'file-saver'
import {
  getQrToScan
} from './service'

type Model = {
  namespace: 'settingAccount'
  state: TypeDataGenerateQR
  reducers: {
    saveDataSetting: Reducer<TypeDataGenerateQR>
  }
  effects: {
    getQrToScan: Effect
  }
}

export default <Model>{
  namespace: "settingAccount",
  state: {
    status: 200,
  },
  reducers: {
    saveDataSetting(state, { payload }) {
      return {
        ...state,
        data: payload,
      }
    },
  },
  effects: {
    *getQrToScan({ payload }, { call, put }) {
      try {
        const response = yield call(getQrToScan, payload)
        yield put({
          type: 'saveDataSetting',
          payload: { ...response },
        })
      } catch (error) {
        message.error(formatMessage({ id: 'error' }))
      }
    },
  }
}
