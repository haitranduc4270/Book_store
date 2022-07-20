import type { FC } from 'react'
import { useEffect } from 'react'
import { Button, Input, Form, Avatar, Upload, Row, Col, Select, DatePicker, Spin } from 'antd'
import type { Dispatch } from 'umi'
import _ from 'lodash'
import moment from 'moment'
import { connect, FormattedMessage, useIntl } from 'umi'
import { UploadOutlined } from '@ant-design/icons'
import type { TypeUser } from '../../data'

type Props = {
  dispatch: Dispatch
  profile: TypeUser
  avatar: any
  loading: boolean
}

const AccountInfomation: FC<Props> = ({ dispatch, profile, loading }) => {
  const { formatMessage } = useIntl()
  const [form] = Form.useForm()

  useEffect(() => {
    if (profile) {
      form.setFieldsValue({
        ...profile,
        dob: _.get(profile, 'dob') ? moment(_.get(profile, 'dob')) : '',
        startWorkAt: _.get(profile, 'startWorkAt') ? moment(_.get(profile, 'startWorkAt')) : '',
      })
    }
  }, [profile, form])

  const handleFinish = (values: any) => {
    dispatch({
      type: 'profile/updateProfile',
      payload: {
        data: values,
        query: profile._id,
      },
    })
  }

  const uploadAvatar = (values: any) => {
    console.log("🚀 ~ file: index.tsx ~ line 43 ~ uploadAvatar ~ values", values.file)
    if (values.file.status !== 'uploading') {
      const data = new FormData()
      data.append('file', values.file)
      dispatch({
        type: 'profile/uploadAvatar',
        payload: {
          data,
          query: profile._id,
        },
      })
    }
  }

  return (
    <>
      <div className="layout--main__title">
        <FormattedMessage id="settings__account.menu.accountInformation" />
      </div>
      <Spin spinning={loading}>
        <Row className="mt--22" gutter={80}>
          <Col xl={6} md={12} sm={24}>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleFinish}
          >
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
            >
                <Input />
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
                <DatePicker className="w--full" format="DD/MM/YYYY" />
              </Form.Item>
              <Form.Item
                name="dob"
                label={formatMessage({ id: 'common.birthday' })}
                rules={[
                  {
                    required: true,
                    message: formatMessage({ id: 'form.formItem.required.message' }),
                  },
                ]}
            >
                <DatePicker format="DD/MM/YYYY" className="w--full" />
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
                name="state"
                label={formatMessage({ id: 'common.status' })}
                initialValue="DOING"
        >
                <Select defaultValue="DOING" placeholder={formatMessage({ id : 'common.select' })}>
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
              <Form.Item
                name="currentLocation"
                label='Nơi ở hiện tại'
            >
                <Input />
              </Form.Item>
              <Form.Item
                name="hometown"
                label='Quê quán'
            >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button className="w--160" htmlType="submit" type="primary">
                  <FormattedMessage id="button.update" />
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col xl={16} md={12} sm={24} >
            <div className="mb--10">
              <FormattedMessage id="common.avatar" />
            </div>
            <div className="mb--10">
              <Avatar size={141} />
            </div>
            <Upload
              showUploadList={false}
              beforeUpload={() => false}
              onChange={uploadAvatar}
              accept="image/*"
           >
              <Button size="small" className="w--141">
                <UploadOutlined />
                <FormattedMessage id="button.upload" />
              </Button>
            </Upload>
          </Col>
        </Row>
      </Spin>
    </>
  )
}

export default connect()(AccountInfomation)
