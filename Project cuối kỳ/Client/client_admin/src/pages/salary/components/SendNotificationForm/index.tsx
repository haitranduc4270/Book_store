import { Form, Modal, Input, Radio } from 'antd'
import { connect } from 'dva'
import { Dispatch, useIntl } from 'umi'

interface Values {
  title: string
  content: string
}

interface CollectionCreateFormProps {
  visible: boolean
  onCreate: (values: Values) => void
  onCancel: () => void
  dispatch: Dispatch
}

const SendNotificationForm: React.FC<CollectionCreateFormProps> = ({
  visible,
  onCancel,
  dispatch,
}) => {
  const [form] = Form.useForm()
  const { formatMessage } = useIntl()

  const sendNotification = (values: any) => {
    dispatch({
      type: 'salary/sendNotification',
      payload: {
        data: values,
      },
    })
  }
  return (
    <Modal
      visible={visible}
      title={formatMessage({ id: 'menu.sendNotificationTitle' })}
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then((values) => {
          const { title, content } = values
          const data = { title, content }
          sendNotification(data)
        })
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input the title of collection!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="content" label="Description">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default connect(
  ({
    loading,
  }: {
    loading: {
      effects: Record<string, boolean>
    }
  }) => ({}),
)(SendNotificationForm)
