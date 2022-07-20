import type { FC } from 'react'
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu, Spin } from 'antd'
import type { Dispatch } from 'umi'
import { connect, FormattedMessage } from 'umi'
import styles from '../styles.less'
import type { TypeUserAndLogin } from '@/pages/user/login/data'

type Props = {
  dispatch: Dispatch
  accountInfo: TypeUserAndLogin
}

const AvatarDropdown: FC<Props> = ({ dispatch, accountInfo }) => {
  const onMenuClick = (e: any) => {
    if (e.key === 'logout') {
      if (dispatch) {
        dispatch({
          type: 'userAndLogin/logout',
        })
      }
    }
  }

  return accountInfo && accountInfo?.data?.name? (
    <Dropdown
      overlayClassName={styles.container}
      overlay={
        <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
          <Menu.Item key="account">
            <SettingOutlined />
            <FormattedMessage id="header.avatar.account" defaultMessage="Account" />
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="logout">
            <LogoutOutlined />
            <FormattedMessage id="header.avatar.logout" defaultMessage="Logout" />
          </Menu.Item>
        </Menu>
      }
    >
      <span className={`${styles.action} ${styles.account}`}>
        {accountInfo?.data?.avatar ? (
          <Avatar
            size="small"
            className={styles.avatar}
            alt="avatar"
            src={accountInfo?.data?.avatar?.url}
          />
        ) : (
          <Avatar
            size="small"
            className={styles.avatar}
            alt="avatar"
            style={{ backgroundColor: '#f56a00' }}
          >
            {accountInfo?.data?.name.split(' ').pop()?.toUpperCase().charAt(0)}
          </Avatar>
        )}
        <span className="anticon">{accountInfo?.data?.name}</span>
      </span>
    </Dropdown>
  ) : (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  )
}

export default connect(({ userAndLogin }: { userAndLogin: TypeUserAndLogin }) => ({
  accountInfo: userAndLogin,
}))(AvatarDropdown)
