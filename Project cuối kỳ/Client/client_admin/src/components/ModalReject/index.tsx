import type { FC } from 'react'
import React from 'react'
import { Button, Divider, Form, Input, Modal, Space } from 'antd'
import { connect, useIntl } from 'umi'
import { CloseOutlined } from '@ant-design/icons'

type Props = {
  isVisibleModal: boolean
  setIsVisibleModal: (data: boolean) => void
  onOk: (data: any) => void
}

const ModalCreateOrEdit: FC<Props> = ({
  isVisibleModal,
  setIsVisibleModal,
  onOk,
}) => {
  const { formatMessage } = useIntl()

  const handleFinish = (values: any) => {
    onOk(values.reason)
    setIsVisibleModal(false)
  }

  return (
    <Modal
      title='Lý do'
      visible={isVisibleModal}
      footer={null}
      closeIcon={<CloseOutlined onClick={() => setIsVisibleModal(false)} />}
      centered
      destroyOnClose
    >
      <Form layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="reason"
          rules={[
            {
              required: true,
              message: formatMessage({ id: 'form.formItem.required.message' }),
            },
          ]}
        >
          <Input.TextArea size="large" />
        </Form.Item>
        <Divider />
        <Form.Item className="mb--0">
          <Space className="w--full justify-content--flexEnd">
            <Button onClick={() => setIsVisibleModal(false)}>
              {formatMessage({ id: 'button.cancel' })}
            </Button>
            <Button htmlType="submit" type="primary" danger>Gửi</Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default connect()(ModalCreateOrEdit)
