import type { FC } from 'react'
import { stringify } from 'querystring'
import { connect, Redirect } from 'umi'
import type { TypeUserAndLogin } from '@/pages/user/login/data'

type Props = {
  children: any
  userAndLogin: TypeUserAndLogin
}

const SecurityLayout: FC<Props> = ({ children, userAndLogin }) => {
  const isLogin = userAndLogin.data?.accessToken
  const queryString = stringify({
    redirect: window.location.href,
  })

  if (!isLogin && window.location.pathname !== '/user/login') {
    return <Redirect to={`/user/login?${queryString}`} />
  }
  return children
}

export default connect(({ userAndLogin }: { userAndLogin: TypeUserAndLogin }) => ({
  userAndLogin,
}))(SecurityLayout)
