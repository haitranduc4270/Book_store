import type { FC } from 'react'
import React from 'react'
import { Button, Col, Form, Input, Row, Select } from 'antd'
import type { Dispatch } from 'umi'
import { connect, useIntl } from 'umi'

type Props = {
  dispatch: Dispatch
  setCondition: any
}

const SearchProject: FC<Props> = ({ setCondition }) => {
  const { formatMessage } = useIntl()
  const [form] = Form.useForm()

  const configCol = {
    span: 4,
  }

  const onSearch = (values: any) => {
    const data = {
      name: values.name || '',
      state: values.state || '',
    }
    setCondition(data)
  }

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onSearch}
    >
      <Row gutter={15}>
        <Col {...configCol}>
          <Form.Item
            name={`name`}
          >
            <Input placeholder={formatMessage({ id: 'common.name' })} />
          </Form.Item>
        </Col>
        <Col {...configCol}>
          <Form.Item
            name={`state`}
          >
            <Select placeholder='Trạng thái' allowClear>
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
        </Col>
        <Col span={16} style={{ textAlign: 'right' }}>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields()
              setCondition(null)
            }}
          >
            {formatMessage({ id : 'button.reset' })}
          </Button>
          <Button type="primary" htmlType="submit">
            {formatMessage({ id : 'button.search' })}
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default connect()(SearchProject)
