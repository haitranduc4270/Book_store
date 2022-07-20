import type { FC } from 'react'
import { useEffect } from 'react'
import { Alert, Button, Form, Input, notification } from 'antd'
import type { Dispatch } from 'umi'
import { connect, FormattedMessage, useIntl, setLocale } from 'umi'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import styles from './style.less'
import { TypeUserAndLogin } from '../login/data'

type Props = {
  dispatch: Dispatch
  userAndLogin: TypeUserAndLogin
  loading?: boolean
}

const Login2fa: FC<Props> = ({ dispatch, userAndLogin, loading }) => {
  const { formatMessage } = useIntl()
  useEffect(() => {
    if (!localStorage.getItem('umi_locale')) {
      setLocale('vi-VN', false)
    }
  }, [])
  const handleSubmit = (values: any) => {
    notification.destroy()
    dispatch({
      type: 'userAndLogin/getVerify',
      payload: {
        data: {
          ...values,
          email: userAndLogin.data?.email,
        },
      },
    })
  }

  return (
    <div className={styles.main}>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label={formatMessage({ id: 'login.token2fa' })}
          name="otpToken"
          rules={[
            {
              required: true,
              message: formatMessage({ id: 'form.formItem.required.message' }),
            },
          ]}
        >
          <Input prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item>
          <Button className="w--full" loading={loading} type="primary" htmlType="submit">
            <FormattedMessage id="button.send" />
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default connect(
  ({
    userAndLogin,
    loading,
  }: {
    userAndLogin: TypeUserAndLogin
    loading: {
      effects: Record<string, boolean>
    }
  }) => {
    return {
      userAndLogin,
      loading: loading.effects['userAndLogin/login'],
    }
  },
)(Login2fa)
