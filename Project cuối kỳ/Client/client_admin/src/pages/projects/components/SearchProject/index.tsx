import type { FC } from 'react'
import React from 'react'
import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd'
import type { Dispatch } from 'umi'
import { connect, useIntl } from 'umi'
import _ from 'lodash'
import { isMoment } from 'moment'

type Props = {
  dispatch: Dispatch
  setCondition: any
}

const SearchProject: FC<Props> = ({ setCondition }) => {
  const { formatMessage } = useIntl()
  const [form] = Form.useForm()

  const configCol = {
    span: 6,
  }

  const onSearch = (values: any) => {
    const data = {
      name: _.get(values, 'name', ''),
      state: _.get(values, 'state', ''),
      start: isMoment(values.start) ? values.start.format('YYYY-MM-DD') : '',
      end: isMoment(values.end) ? values.end.format('YYYY-MM-DD') : '',
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
            <Input placeholder={formatMessage({ id: 'common.name' })} allowClear />
          </Form.Item>
        </Col>
        <Col {...configCol}>
          <Form.Item
            name={`state`}
          >
            <Select placeholder={formatMessage({ id : 'common.select' })} allowClear>
              <Select.Option value="PENDING">
                {formatMessage({ id: 'project.status.pending' })}
              </Select.Option>
              <Select.Option value="DONE">
                {formatMessage({ id: 'project.status.done' })}
              </Select.Option>
              <Select.Option value="REJECT">
                {formatMessage({ id: 'project.status.reject' })}
              </Select.Option>
              <Select.Option value="DOING">
                {formatMessage({ id: 'project.status.doing' })}
              </Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col {...configCol}>
          <Form.Item
            name={`start`}
          >
            <DatePicker format="DD/MM/YYYY" style={{ width: '100%' }} placeholder={formatMessage({ id: 'common.startAt' })} allowClear />
          </Form.Item>
        </Col>
        <Col {...configCol}>
          <Form.Item
            name={`end`}
          >
            <DatePicker format="DD/MM/YYYY" style={{ width: '100%' }} placeholder={formatMessage({ id: 'common.finishAt' })} allowClear />
          </Form.Item>
        </Col>
        <Col span={24} style={{ textAlign: 'right' }}>
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
