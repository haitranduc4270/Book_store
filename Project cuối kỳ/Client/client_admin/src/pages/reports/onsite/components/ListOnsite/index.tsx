import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Row, Col, Table, Button, Divider, Breadcrumb, Badge } from 'antd'
import type { Dispatch } from 'umi'
import { connect, FormattedMessage, useIntl } from 'umi'
import _ from 'lodash'
import moment from 'moment'
import type { TypeListOnsite, TypeOnsite } from '../../data'
import { modalApproved } from '@/utils/utils'
import { ModalReject } from '@/components'

type Props = {
  dispatch: Dispatch
  dataTable: TypeListOnsite
  approvedOrReject?: boolean
  condition: any
}

const ListNew: FC<Props> = ({ dispatch, dataTable, approvedOrReject, condition }) => {
  const { formatMessage } = useIntl()
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [recordId, setRecordId] = useState<any>()
  const [pageNo, setPageNo] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    if (condition) {
      dispatch({
        type: 'onsite/searchOnsite',
        payload: {
          query: `?pageNo=${pageNo}&pageSize=${pageSize}`,
          data: condition,
        },
      })
    } else {
      dispatch({
        type: 'onsite/getOnsite',
        payload: {
          query: `?pageNo=${pageNo}&pageSize=${pageSize}`,
        },
      })
    }
    setLoading(false)
  }, [dispatch, pageNo, pageSize, condition])

  useEffect(() => {
    if (approvedOrReject) {
      setLoading(true)
    }
    if (approvedOrReject === false) {
      setSelectedRowKeys([])
      if (condition) {
        dispatch({
          type: 'onsite/searchOnsite',
          payload: {
            query: `?pageNo=${pageNo}&pageSize=${pageSize}`,
            data: condition,
          },
        })
      } else {
        dispatch({
          type: 'onsite/getOnsite',
          payload: {
            query: `?pageNo=${pageNo}&pageSize=${pageSize}`,
          },
        })
      }
      setRecordId(null)
      setLoading(false)
    }
  }, [approvedOrReject, dispatch, pageNo, pageSize, condition])

  const onChangeSelectRow = (values: any) => {
    setSelectedRowKeys(values)
  }

  const onChangePagination = (value: number) => {
    setPageNo(value)
    setSelectedRowKeys([])
  }

  const onApprove = (id: string) => {
    const onOk = () => {
      dispatch({
        type: 'onsite/approvedOrReject',
        payload: {
          query: id,
          data: {
            action: 1,
          },
        },
      })
    }
    modalApproved(onOk)
  }
  const onReject = (id: string) => {
    setRecordId(id)
    setIsVisibleModal(true)
  }

  const request = (values: any) => {
    dispatch({
      type: 'onsite/approvedOrReject',
      payload: {
        query: recordId,
        data: {
          action: 0,
          reason: values,
        },
      },
    })
  }

  // const displayTime = (from: string, to: string) => {
  //   if (!from || !to || from === 'undefined' || to === 'undefined') {
  //     return ''
  //   }
  //   const timer = moment(to, 'HH:mm:ss').diff(moment(from, 'HH:mm:ss'))
  //   const minutes = Math.floor((timer / (1000 * 60)) % 60)
  //   const hours = Math.floor((timer / (1000 * 60 * 60)) % 24)
  //   return `${hours} giờ ${minutes} phút`
  // }

  const displayApprove = (number: number) => {
    switch (number) {
      case 0:
        return {
          text: 'Từ chối',
          status: 'error',
        }
      case 1:
        return {
          text: 'Duyệt',
          status: 'success',
        }
      default:
        return {
          text: 'Chờ duyệt',
          status: 'warning',
        }
    }
  }

  const dataSource =
    dataTable?.data?.map((item: TypeOnsite) => {
      const project: any = _.get(item, 'project', {})
      return {
        key: item._id,
        project: project.name,
        name: _.get(item, 'employee', { name: '' })?.name,
        status: item.approved,
        dateWork: item.date && moment(item.date).format('DD/MM/YYYY'),
        time: { from: item.from, to: item.to },
      }
    }) || []
  const columns: any = [
    {
      title: formatMessage({ id: 'common.name' }),
      dataIndex: 'name',
      key: 'name',
      render: (value: string) => (
        <Button
          className="pl--0"
          type="link"
          htmlType="button" /* onClick={() => onDelete(record.key)} */
        >
          {value}
        </Button>
      ),
    },
    {
      title: formatMessage({ id: 'common.project' }),
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: formatMessage({ id: 'common.dateWork' }),
      dataIndex: 'dateWork',
      key: 'dateWork',
    },
    {
      title: formatMessage({ id: 'common.status' }),
      dataIndex: 'status',
      key: 'status',
      render: (_value: number) => {
        const status: any = displayApprove(_value)
        return <Badge {...status} />
      },
    },
    {
      title: formatMessage({ id: 'common.action' }),
      key: 'action',
      render: (value: string, record: any) => (
        <div className="display--flex justify-content--between">
          <Button
            className="pl--0"
            type="link"
            htmlType="button"
            disabled={record.status === 1}
            onClick={() => onApprove(record.key)}
          >
            Duyệt
          </Button>
          <Button
            className="pl--0"
            type="link"
            htmlType="button"
            disabled={record.status === 0}
            onClick={() => onReject(record.key)}
            danger
          >
            Từ chối
          </Button>
        </div>
      ),
      width: 100,
    },
  ]

  return (
    <>
      <Breadcrumb separator=">" className="layout--main__title">
        <Breadcrumb.Item>
          <FormattedMessage id="report" />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <FormattedMessage id="report.onsite" />
        </Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <Row gutter={24}>
        <Col span={24}>
          <div className="layout--table">
            <Table
              rowSelection={{
                selectedRowKeys,
                onChange: onChangeSelectRow,
                fixed: true,
              }}
              scroll={{
                x: true,
              }}
              pagination={{
                size: 'small',
                position: ['bottomRight'],
                showSizeChanger: true,
                total: dataTable?.total,
                onChange: (value: number) => onChangePagination(value),
                showTotal: (total: number, range: any) =>
                  `${range[0]} - ${range[1]} of ${total} items`,
                current: pageNo,
                pageSize,
                onShowSizeChange: (current: number, size: number) => setPageSize(size),
              }}
              dataSource={dataSource}
              columns={columns}
              loading={loading}
            />
          </div>
        </Col>
      </Row>
      <ModalReject
        onOk={request}
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
      ></ModalReject>
    </>
  )
}

export default connect(
  ({
    onsite,
    loading,
  }: {
    onsite: TypeListOnsite
    loading: {
      effects: Record<string, boolean>
    }
  }) => ({
    dataTable: onsite,
    approvedOrReject: loading.effects['onsite/approvedOrReject'],
  }),
)(ListNew)
