import type { FC } from 'react'
import { useEffect } from 'react'
import { Alert, Button, Form, Input, notification } from 'antd'
import type { Dispatch } from 'umi'
import { connect, FormattedMessage, useIntl, setLocale } from 'umi'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import type { TypeUserAndLogin } from './data'
import styles from './style.less'

type Props = {
  dispatch: Dispatch
  userAndLogin: TypeUserAndLogin
  loading?: boolean
}

const Login: FC<Props> = ({ dispatch, userAndLogin = {}, loading }) => {
  const { formatMessage } = useIntl()
  const { status } = userAndLogin
  useEffect(() => {
    if (!localStorage.getItem('umi_locale')) {
      setLocale('vi-VN', false)
    }
  }, [])

  const handleSubmit = (values: any) => {
    notification.destroy()
    dispatch({
      type: 'userAndLogin/loginRequest2fa',
      payload: {
        data: {
          ...values,
        },
      },
    })
  }

  return (
    <div className={styles.main}>
      <Form layout="vertical" onFinish={handleSubmit}>
        <>
          {!/^2/g.test(String(status)) && !loading && (
            <Alert
              style={{
                marginBottom: 24,
              }}
              message={formatMessage({ id: 'login.error' })}
              type="error"
              showIcon
            />
          )}
        </>
        <Form.Item
          label={formatMessage({ id: 'login.email' })}
          name="email"
          rules={[
            {
              required: true,
              message: formatMessage({ id: 'form.formItem.required.message' }),
            },
          ]}
        >
          <Input prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item
          label={formatMessage({ id: 'login.password' })}
          name="publicKey"
          rules={[
            {
              required: true,
              message: formatMessage({ id: 'form.formItem.required.message' }),
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} />
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
  }) => ({
    userAndLogin,
    loading: loading.effects['userAndLogin/login'],
  }),
)(Login)
