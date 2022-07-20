import type { FC } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd'
import { connect, useIntl } from 'umi'
import type { Dispatch } from 'umi'
import _ from 'lodash'
import { isMoment } from 'moment'
import type { TypeListProject, TypeProject } from '@/pages/projects/data'


type Props = {
  dispatch: Dispatch
  dataTable: TypeListProject
  setCondition: any
}

const SearchProject: FC<Props> = ({ setCondition, dispatch, dataTable }) => {
  const { formatMessage } = useIntl()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    dispatch({
      type: 'projects/getListProjects',
      payload: {
        query: `?pageNo=${1}&pageSize=${999}`,
      },
    })
    setLoading(false)
  }, [dispatch] )

  const onSearch = (values: any) => {
    const data = {
      name: _.get(values, 'name', ''),
      projectId: _.get(values, 'projectId', ''),
      start: !_.isEmpty(values.state) && isMoment(values.state[0]) ? values.state[0].format('YYYY-MM-DD') : '',
      finish: !_.isEmpty(values.state) && isMoment(values.state[1]) ? values.state[1].format('YYYY-MM-DD') : '',
    }
    setCondition(data)
  }

  const dataProject = dataTable.data?.map((item: TypeProject) => ({
    key: item._id,
    label: item.name,
    value: item._id,
  }))

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onSearch}
    >
      <Row gutter={20}>
        <Col span="3">
          <Form.Item
            name={`name`}
          >
            <Input placeholder={formatMessage({ id: 'common.name' })} />
          </Form.Item>
        </Col>
        <Col span="5">
          <Form.Item
            name={`state`}
          >
            <DatePicker.RangePicker format="DD/MM/YYYY" className="w--full" inputReadOnly placeholder={[formatMessage({ id: 'common.from' }), formatMessage({ id: 'common.to' })]} />
          </Form.Item>
        </Col>
        <Col span="4">
          <Form.Item
            name={`projectId`}
          >
            <Select options={dataProject} placeholder={formatMessage({ id: 'common.project' })} loading={loading} />
          </Form.Item>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields()
              setCondition(undefined)
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

export default connect(
  ({
    projects,
  }: {
    projects: TypeListProject
  }) => ({
    dataTable: projects,
  }),
)(SearchProject)
