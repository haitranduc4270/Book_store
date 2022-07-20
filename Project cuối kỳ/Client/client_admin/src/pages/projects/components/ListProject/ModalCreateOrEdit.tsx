import type { FC } from 'react'
import { useEffect } from 'react'
import { Button, DatePicker, Divider, Form, Input, Modal, Select, Space } from 'antd'
import type { Dispatch } from 'umi'
import { connect, useIntl } from 'umi'
import { CloseOutlined } from '@ant-design/icons'
import moment from 'moment'

type Props = {
  dispatch: Dispatch
  modalData: {
    modalType: 'create' | 'edit'
    record?: any
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
        ...modalData.record,
      })
    }
  }, [form, isVisibleModal, modalData.modalType, modalData.record])

  const handleFinish = (values: any) => {
    if (modalData.modalType === 'create') {
      dispatch({
        type: 'projects/createProject',
        payload: {
          data: {
            ...values,
          },
        },
      })
    } else {
      dispatch({
        type: 'projects/editProject',
        payload: {
          id: modalData.record.key,
          data: {
            ...values,
            start: moment(values.start).format('YYYY-MM-DD'),
            end: moment(values.end).format('YYYY-MM-DD'),
          },
        },
      })
    }
    setIsVisibleModal(false)
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
          name="type"
          label="Thể loại"
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
          name="thumbnail"
          label="Ảnh"
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
          name="quantity"
          label="Số lượng"
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
          name="author"
          label="Tác giả"
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
          name="description"
          label="Mô tả"
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
          name="price"
          label="Giá tiền"
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
          name="name"
          label="Tên"
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
