import type { FC } from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import { Row, Col, Divider, Button } from 'antd'
import { connect } from 'umi'
import _ from 'lodash'
import { banks } from './logoBank'
import type { TypeUser } from '../../data'
import ModalCreateOrEdit from './ModalCreateOrEdit'

type Props = {
  profile: TypeUser
}

const ChangePassword: FC<Props> = ({ profile }) => {

  const [modalData, setModalData] = useState<{
    modalType: 'create' | 'edit'
    item?: any
  }>({ modalType: 'create' })
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  // const handleFinish = () => {
  //   message.success(formatMessage({ id: 'button.update.success' }))
  // }


  return (
    <>
      <div className="layout--main__title">
        Thông tin thanh toán
      </div>
      {_.get(profile, 'banksInfo', []).map((item: any) => (
        <Fragment key={item._id}>
          <Row className="pt--10 pl--15 pr--10" align="middle">
            <Col span={4}>
              <img src={banks[item.name] || ''} style={{ width:'auto' }} alt="bank" />
            </Col>
            <Col span={12}>
              <div style={{ lineHeight: 3 }}>
                <p style={{ fontWeight: 'bold', margin:0 }}>
                  {item.name} - Chi nhánh {item.branch}
                </p>
                <span>{item.accNo}</span>
                <br />
                <span>{item.accName}</span>
              </div>
            </Col>
            <Col span={8} className="display--flex justify-content--flexEnd">
              <Button htmlType="button" type="link" onClick={() => {
                setModalData({
                  modalType: 'edit',
                  item,
                })
                setIsVisibleModal(true)
              }} >Sửa</Button>
            </Col>
          </Row>
          <Divider />
        </Fragment>
      ))}
      <Button className="w--160" htmlType="button" type="primary"
        onClick={() => {
          setModalData({
            modalType: 'create',
            item: profile._id,
          })
          setIsVisibleModal(true)
        }} >Thêm tài khoản</Button>
      <ModalCreateOrEdit
        modalData={modalData}
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
      />
    </>
  )
}

export default connect()(ChangePassword)
