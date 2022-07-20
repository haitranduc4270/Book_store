import type { FC } from 'react'
import { useEffect } from 'react'
import React from 'react'
import { Button, Form, Row, Col, Divider, Spin, InputNumber } from 'antd'
import type { Dispatch } from 'umi'
import { connect, FormattedMessage } from 'umi'
import type { TypeTreatment } from '../../data'

type Props = {
  dispatch: Dispatch
  salary: TypeTreatment
  loading: boolean
  id: string
}

const ChangePassword: FC<Props> = ({ salary, dispatch, loading, id }) => {
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ ...salary })
  }, [salary, form])

  const handleFinish = (values: any) => {
    dispatch({
      type: 'profile/updateTreatment',
      payload: {
        data: { ...values, employee: id },
      },
    })
  }

  return (
    <>
      <div className="layout--main__title">
        Cơ chế đãi ngộ
      </div>
      <Divider />
      <Spin spinning={loading}>
        <Form
          layout="vertical"
          form={form}
          onFinish={handleFinish}
          >
          <Row gutter={50}>
            <Col xl={6} md={12} sm={24}>
              <Form.Item
                name="basicSalary"
                label='Lương cơ bản'
            >
                <InputNumber
                  className="w--full"
                  formatter={(value: any) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
                />
              </Form.Item>
              <Form.Item
                name="otTreatment"
                label='Lương overtime ( tính theo giờ )'
            >
                <InputNumber
                  className="w--full"
                  formatter={(value: any) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
                />
              </Form.Item>
              <Form.Item
                name="outsourceSalary"
                label='Lương outsource ( tính theo giờ )'
            >
                <InputNumber
                  className="w--full"
                  formatter={(value: any) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
                />
              </Form.Item>
            </Col>
            <Col xl={6} md={12} sm={24}>
              <Form.Item
                name="onsiteTreatment"
                label='Trợ cấp Onsite (Tính theo buổi )'
            >
                <InputNumber
                  className="w--full"
                  formatter={(value: any) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
                />
              </Form.Item>
              <Form.Item
                name="travelTreatment"
                label='Trợ cấp gửi xe'
            >
                <InputNumber
                  className="w--full"
                  formatter={(value: any) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
                />
              </Form.Item>
              <Form.Item
                name="phoneTreatment"
                label='Trợ cấp điện thoại / 3g ( tính theo tháng )'
            >
                <InputNumber
                  className="w--full"
                  formatter={(value: any) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
                />
              </Form.Item>
            </Col>
            <Col sm={24}>
              <Form.Item>
                <Button className="w--160" htmlType="submit" type="primary">
                  <FormattedMessage id="button.update" />
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Spin>
    </>
  )
}

export default connect()(ChangePassword)
