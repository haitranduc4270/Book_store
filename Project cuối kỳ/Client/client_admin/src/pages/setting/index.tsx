import { FC, useEffect, useState } from 'react'
// import { useState } from 'react'
import { GridContent } from '@ant-design/pro-layout'
import { connect, Dispatch } from 'umi'
import { TypeDataGenerateQR } from './data'
import styles from './styles.less'
import logo from '../../../public/favicon.png'
type Props = {
  dispatch: Dispatch
  dataGenerateQR: TypeDataGenerateQR
}

const Settings2fa: FC<Props> = ({ dispatch, dataGenerateQR }) => {
  // const [condition, setCondition] = useState<any>()
  const [loading, setLoading] = useState(false)
  const dataQR = dataGenerateQR.data?.QRCodeImage
  useEffect(() => {
    const fc = async () => {
      setLoading(true)
      await dispatch({
        type: 'settingAccount/getQrToScan',
        payload: { test: '1231' },
      })
      setLoading(false)
    }
    fc()
  }, [dispatch])

  return (
    <GridContent>
      <div className={styles.centerUsing}>
        <img className={styles.logo}src= {logo} alt="Logo" />
        <p>Two-Factor Authentication(2FA)</p>
        <img className={styles.qr} src={dataQR} alt="QR-code" />
      </div>
    </GridContent>
  )
}
export default connect(
  ({
    settingAccount,
  }: {
    settingAccount: TypeDataGenerateQR
    loading: {
      effects: Record<string, boolean>
    }
  }) => ({ dataGenerateQR: settingAccount }),
)(Settings2fa)
