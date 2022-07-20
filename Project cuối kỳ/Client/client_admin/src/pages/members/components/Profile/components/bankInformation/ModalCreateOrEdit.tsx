import type { FC } from 'react'
import { useEffect } from 'react'
import { Button, Divider, Form, Input, Modal, Select, Space } from 'antd'
import type { Dispatch } from 'umi'
import { connect, useIntl } from 'umi'
import { banks } from './logoBank'
import { CloseOutlined } from '@ant-design/icons'

type Props = {
  dispatch: Dispatch
  modalData: {
    modalType: 'create' | 'edit'
    item?: any
  }
  isVisibleModal: boolean
  setIsVisibleModal: (data: boolean) => void
}

const ModalCreateOrEdit: FC<Props> = ({
  dispatch,
  modalData,
  isVisibleModal,
  setIsVisibleModal,
}) => {
  const { formatMessage } = useIntl()
  const [form] = Form.useForm()
  useEffect(() => {
    if (!isVisibleModal) {
      form.resetFields()
    } else if (modalData.modalType === 'edit') {
      form.setFieldsValue({
        ...modalData.item,
      })
    }
  }, [form, isVisibleModal, modalData.modalType, modalData.item])

  const handleFinish = (values: any) => {
    if (modalData.modalType === 'create') {
      dispatch({
        type: 'profile/addBank',
        payload: {
          data: {
            ...values,
            employeeID: modalData.item,
            main: false,
          },
        },
      })
    } else {
      dispatch({
        type: 'profile/updateBank',
        payload: {
          query: modalData.item._id,
          data: {
            ...values,
            main: false,
          },
        },
      })
    }
    setIsVisibleModal(false)
  }

  const formatBank = () => {
    const listBank: any[] = []
    Object.keys(banks).forEach((key: any) => {
      listBank.push({
        label: key,
        value: key,
      })
    })
    return listBank
  }

  return (
    <Modal
      title={formatMessage({
        id: modalData.modalType === 'create' ? 'button.create' : 'button.edit',
      })}
      visible={isVisibleModal}
      footer={null}
      closeIcon={<CloseOutlined onClick={() => setIsVisibleModal(false)} />}
      centered
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="name"
          label='Tên ngân hàng'
          rules={[
            {
              required: true,
              message: formatMessage({ id: 'form.formItem.required.message' }),
            },
          ]}
        >
          <Select options={formatBank()} placeholder="Chọn tên ngân hàng" />
        </Form.Item>
        <Form.Item
          name="branch"
          label='Chi nhánh'
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="accName"
          label='Chủ tài khoản'
          rules={[
            {
              required: true,
              message: formatMessage({ id: 'form.formItem.required.message' }),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="accNo"
          label='Số tài khoản'
          rules={[
            {
              required: true,
              message: formatMessage({ id: 'form.formItem.required.message' }),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Divider />
        <Form.Item className="mb--0">
          <Space className="w--full justify-content--flexEnd">
            <Button onClick={() => setIsVisibleModal(false)}>
              {formatMessage({ id: 'button.cancel' })}
            </Button>
            <Button htmlType="submit" type="primary">
              {formatMessage({
                id: modalData.modalType === 'create' ? 'button.create' : 'button.update',
              })}
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default connect()(ModalCreateOrEdit)
