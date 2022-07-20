import type { FC } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Col, DatePicker, Form, Row } from 'antd'
import moment from 'moment'
import type { Dispatch } from 'umi'
import { connect, useIntl } from 'umi'
import SendNotificationForm from '../SendNotificationForm'

type Props = {
  dispatch: Dispatch
  setCondition: any
  getSalary?: boolean
}

const SearchProject: FC<Props> = ({ setCondition, dispatch, getSalary }) => {
  const { formatMessage } = useIntl()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    form.setFieldsValue({ date: moment() })
  }, [form])

  useEffect(() => {
    if (getSalary) {
      setLoading(true)
    }
    if (getSalary === false) {
      setLoading(false)
    }
  }, [getSalary])

  const onSearch = (values: any) => {
    dispatch({
      type: 'salary/getSalary',
      payload: {
        query: values.date.format('MM-YYYY'),
      },
    })
    setCondition(values.date.format('MM-YYYY'))
  }

  return (
    <div style={{ display: 'flex' }}>
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onSearch}
        style={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}
      >
        {/* <Row gutter={15}>
          <Col xs={12}> */}
        <Form.Item name={`date`}>
          <DatePicker
            format="MM-YYYY"
            className="w--280"
            placeholder="Chọn tháng"
            picker="month"
            allowClear
          />
        </Form.Item>
        {/* </Col> */}
        {/* <Col span={12} style={{ textAlign: 'right', paddingRight: '16px' }}> */}
        <div style={{ marginRight: '8px' }}>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.setFieldsValue({ date: moment() })
              setCondition(moment())
            }}
          >
            {formatMessage({ id: 'button.reset' })}
          </Button>
          <Button type="primary" htmlType="submit" disabled={loading}>
            {formatMessage({ id: 'button.search' })}
          </Button>
        </div>
        {/* </Col>
        </Row> */}
      </Form>
      <Form style={{ width: '10%', minWidth: '120px' }}>
        <Col style={{ textAlign: 'right' }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={loading}
            onClick={() => {
              setVisible(true)
            }}
          >
            {formatMessage({ id: 'button.sendNoti' })}
          </Button>

          <SendNotificationForm
            visible={visible}
            onCancel={() => {
              setVisible(false)
            }}
            setVisible={setVisible}
          />
        </Col>
      </Form>
    </div>
  )
}

export default connect(
  ({
    loading,
  }: {
    loading: {
      effects: Record<string, boolean>
    }
  }) => ({
    getSalary: loading.effects['salary/getSalary'],
  }),
)(SearchProject)
