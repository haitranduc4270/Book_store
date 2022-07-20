/* eslint-disable react-hooks/exhaustive-deps */
import type { FC } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import type { Dispatch } from 'umi'
import { useHistory } from 'umi'
import { FormattedMessage, connect } from 'umi'
import { Menu } from 'antd'
import { AccountInformation, Salary, BankInformation } from './components'
import _ from 'lodash'
import type { TypeProfile, TypeTreatment, TypeUser } from './data'

type Props = {
  dispatch: Dispatch
  profile: TypeUser
  treatment: TypeTreatment
  getProfile?: boolean
  updateProfile?: boolean
  updateTreatment?: boolean
  addBank?: boolean
  updateBank?: boolean
}

type SelectKeyState = 'accountInformation' | 'bankInformation' | 'salary' | 'security'

const Account: FC<Props> = ({ dispatch, profile, treatment, getProfile, updateProfile, updateTreatment, addBank, updateBank }) => {
  const [selectKey, setSelectKey] = useState<SelectKeyState>('accountInformation')
  const [loading, setLoading] = useState(false)

  const history: any = useHistory()
  const { record } = history.location.state || {}

  useEffect(() => {
    const fc = async () => {
      dispatch({
        type: 'profile/getProfile',
        payload: {
          query: _.get(record, '_id', ''),
        },
      })
      dispatch({
        type: 'profile/getTreatment',
        payload: {
          query: _.get(record, '_id', ''),
        },
      })
    }
    fc()
  }, [dispatch, record])

  useEffect(() => {
    if (getProfile || updateProfile || updateTreatment || addBank || updateBank) {
      setLoading(true)
    }
    if (
      getProfile === false ||
      updateProfile === false ||
      updateTreatment === false ||
      addBank === false ||
      updateBank === false) {
      setLoading(false)
    }
  }, [getProfile, updateProfile, updateTreatment])

  useEffect(() => {
    if (addBank || updateBank) {
      setLoading(true)
    }
    if ( addBank === false || updateBank === false) {
      dispatch({
        type: 'profile/getProfile',
        payload: {
          query: _.get(record, '_id', ''),
        },
      })
      setLoading(false)
    }
  }, [addBank, updateBank])

  const menuMap = {
    accountInformation: <FormattedMessage id="settings__account.menu.accountInformation" />,
    bankInformation: 'Thông tin thanh toán',
    salary: 'Cơ chế đại ngộ',
    security: 'Thiết lập bảo mật',
  }

  const renderChildren = () => {
    switch (selectKey) {
      case 'accountInformation':
        return <AccountInformation loading={loading} profile={profile} />
      case 'salary':
        return <Salary salary={treatment} loading={loading} id={record?._id} />
      case 'bankInformation':
        return <BankInformation profile={profile} />
      default:
        break
    }

    return null
  }

  return (
    <div className="layout--main">
      <div className="layout--main__left">
        <Menu selectedKeys={[selectKey]} onClick={({ key }) => setSelectKey(key as SelectKeyState)}>
          {Object.keys(menuMap).map((item) => (
            <Menu.Item key={item}>{menuMap[item]}</Menu.Item>
          ))}
        </Menu>
      </div>
      <div className="layout--main__content">{renderChildren()}</div>
    </div>
  )
}

export default connect(
  ({
    profile,
    loading,
  }: {
    profile: TypeProfile,
    loading: {
      effects: Record<string, boolean>
    }
  }) => ({
    profile:profile.user,
    treatment: profile.treatment,
    updateProfile: loading.effects['profile/updateProfile'],
    updateTreatment: loading.effects['profile/updateTreatment'],
    getProfile: loading.effects['profile/getProfile'],
    addBank: loading.effects['profile/addBank'],
    updateBank: loading.effects['profile/updateBank'],
  }),
)(Account)
