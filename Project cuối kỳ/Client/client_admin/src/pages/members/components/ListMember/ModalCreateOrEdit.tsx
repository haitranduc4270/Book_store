import type { FC } from 'react'
import { useEffect } from 'react'
import { Button, DatePicker, Divider, Form, Input, Modal, Select, Space } from 'antd'
import type { Dispatch } from 'umi'
import { connect, FormattedMessage, useIntl } from 'umi'
import { CloseOutlined } from '@ant-design/icons'

type Props = {
  dispatch: Dispatch
  isVisibleModal: boolean
  setIsVisibleModal: (data: boolean) => void
}

const ModalCreateOrEdit: FC<Props> = ({
  dispatch,
  isVisibleModal,
  setIsVisibleModal,
}) => {
  const { formatMessage } = useIntl()
  const [form] = Form.useForm()

  useEffect(() => {
    form.resetFields()
  }, [form, isVisibleModal])

  const handleFinish = (values: any) => {
    dispatch({
      type: 'members/createMember',
      payload: {
        data: {
          ...values,
        },
      },
    })
    setIsVisibleModal(false)
  }

  return (
    <Modal
      title={formatMessage({ id: 'button.create' })}
      visible={isVisibleModal}
      footer={null}
      closeIcon={<CloseOutlined onClick={() => setIsVisibleModal(false)} />}
      centered
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="name"
          label={formatMessage({ id: 'common.name' })}
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
          name="email"
          label={formatMessage({ id: 'common.email' })}
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
          name="phone"
          label={formatMessage({ id: 'common.phone' })}
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
          name="position"
          label={formatMessage({ id: 'common.position' })}
          rules={[
            {
              required: true,
              message: formatMessage({ id: 'form.formItem.required.message' }),
            },
          ]}
        >
          <Select placeholder={formatMessage({ id : 'common.select' })} allowClear>
            <Select.Option value="EMPLOYEE">
              Nhân viên
            </Select.Option>
            <Select.Option value="PROJECT_MANAGER">
              Quản lý dự án
            </Select.Option>
            <Select.Option value="TEAM_LEAD">
              Trưởng nhóm
            </Select.Option>
            <Select.Option value="PARTTIME_EMPLOYEE">
              Nhân viên bán thời gian
            </Select.Option>
            <Select.Option value="REMOTE_EMPLOYEE">
              Nhân viên làm từ xa
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="startWorkAt"
          label={formatMessage({ id: 'common.startAt' })}
          rules={[
            {
              required: true,
              message: formatMessage({ id: 'form.formItem.required.message' }),
            },
          ]}
        >
          <DatePicker format="DD/MM/YYYY" />
        </Form.Item>
        <Form.Item
          name="state"
          label={formatMessage({ id: 'common.status' })}
          initialValue="DOING"
        >
          <Select defaultValue="DOING" placeholder={formatMessage({ id : 'common.select' })} disabled>
            <Select.Option value="PENDING">
              {formatMessage({ id: 'members.status.pending' })}
            </Select.Option>
            <Select.Option value="DOING">
              {formatMessage({ id: 'members.status.doing' })}
            </Select.Option>
            <Select.Option value="ENTIRE">
              {formatMessage({ id: 'members.status.entire' })}
            </Select.Option>
          </Select>
        </Form.Item>
        <Divider />
        <Form.Item className="mb--0">
          <Space className="w--full justify-content--flexEnd">
            <Button onClick={() => setIsVisibleModal(false)}>
              <FormattedMessage id="button.cancel" />
            </Button>
            <Button htmlType="submit" type="primary">
              <FormattedMessage id={'button.create'} />
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default connect()(ModalCreateOrEdit)
