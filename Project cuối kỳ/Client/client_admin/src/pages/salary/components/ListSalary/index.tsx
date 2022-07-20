import type { FC } from 'react'
import { useEffect, useState } from 'react'
import {
  Row,
  Col,
  Table,
  Divider,
  Button,
  Badge,
  Tooltip,
} from 'antd'
import type { Dispatch } from 'umi'
import { connect } from 'umi'
import moment from 'moment'
import type { TypeListSalary } from '../../data'
import { ContainerOutlined, EditOutlined, ReloadOutlined } from '@ant-design/icons'
import { convertPosition, modalApproved } from '@/utils/utils'
import { ModalReject } from '@/components'
import { isEmpty } from 'lodash'

type Props = {
  dispatch: Dispatch
  dataTable: TypeListSalary
  confirmSalary?: boolean
  createSalary?: boolean
  condition: string
}

const ListMember: FC<Props> = ({
  dispatch,
  dataTable,
  confirmSalary,
  createSalary,
  condition,
}) => {
  const [loading, setLoading] = useState(false)
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [recordId, setRecordId] = useState<any>()

  useEffect(() => {
    const fc = async () => {
      setLoading(true)
      await dispatch({
        type: 'salary/getSalary',
        payload: {
          query: moment().format('MM-YYYY'),
        },
      })
      setLoading(false)
    }
    fc()
  }, [dispatch])


  useEffect(() => {
    const fc = async () => {
      if (confirmSalary || createSalary) {
        setLoading(true)
      }
      if (confirmSalary === false || createSalary === false) {
        if (condition) {
          await dispatch({
            type: 'salary/getSalary',
            payload: {
              query: condition,
            },
          })
        } else {
          await dispatch({
            type: 'salary/getSalary',
            payload: {
              query: moment().format('MM-YYYY'),
            },
          })
        }
        setLoading(false)
      }
    }
    fc()
  }, [confirmSalary, createSalary, dispatch, condition])

  const creating = () => {
    if (condition) {
      dispatch({
        type: 'salary/creatSalary',
        payload: {
          query: condition,
        },
      })
    } else {
      dispatch({
        type: 'salary/creatSalary',
        payload: {
          query: moment().format('MM-YYYY'),
        },
      })
    }
  }

  const confirm = (record: any) => {
    const onOk = () => {
      dispatch({
        type: 'salary/confirmSalary',
        payload: {
          query: record,
          data: {
            state: true,
          },
        },
      })
    }
    modalApproved(onOk)
  }

  const onNote = (id: string) => {
    setRecordId(id)
    setIsVisibleModal(true)
  }

  const request = (values: any) => {
    dispatch({
      type: 'salary/confirmSalary',
      payload: {
        query: recordId,
        data: {
          note: values,
        },
      },
    })
  }

  const data = dataTable.data?.map((item: any) => {
    return {
      key: item._id,
      ...item,
      ot: item.ot?.cost,
      onsite: item.onsite?.cost,
      totalOT: item.ot?.total,
      totalOnsite: item.onsite?.total,
      name: item.userDetail?.name,
      position: convertPosition(item.userDetail?.position),
      basicSalary: item.treatmentInformation?.basicSalary,
    }
  })

  const sum = dataTable.data?.reduce((accumulator: number, item: any) => {
    return accumulator + item.moneyMustSend
  }, 0)


  const footer = () => {
    return <Row justify="space-between">
      <Col>
        <p style={{ fontWeight: 'bold', margin: 0 }}>
          Tổng số tiền lương phải trả
        </p>
      </Col>
      <Col className="mr--215">
        <p style={{ fontWeight: 'bold', margin: 0 }}>
          {`${sum}đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </Col>
    </Row>
  }

  const columns: any = [
    {
      title: 'Họ tên',
      width: 200,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Vị trí',
      width: 150,
      dataIndex: 'position',
      key: 'age',
    },
    {
      title: 'Ngày thanh toán',
      dataIndex: 'paidDate',
      key: '1',
      width: 140,
      render:(_value: any) => _value && moment(_value).format('DD/MM/YYYY')
      ,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'state',
      key: '2',
      width: 150,
      render: (_value: string) => {
        return <Badge
          status={_value ? 'success' : 'warning'}
          text={_value ? 'Đã xác nhận' :'Chưa xác nhận'}
        />
      },
    },
    {
      title: <div className="display--flex">
        <p className="text-align--center mb--0">Lương cơ bản
          <br />(1)
        </p>
      </div>,
      dataIndex: 'basicSalary',
      key: '3',
      width: 150,
      align: 'right',
      render: (value: number) => `${value}đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    },
    {
      title: <div className="display--flex">
        <p className="text-align--center mb--0">Lương OT
          <br />(2)
        </p>
      </div>,
      dataIndex: 'ot',
      key: '4',
      width: 150,
      align: 'right',
      render: (value: number, record: any) => <Tooltip title={`${record.totalOT}h`}>{`${value}đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Tooltip>,
    },
    {
      title: <div className="display--flex">
        <p className="text-align--center mb--0">Onsite
          <br />(3)
        </p>
      </div>,
      dataIndex: 'onsite',
      key: '5',
      width: 150,
      align: 'right',
      render: (value: number, record: any) => <Tooltip title={`${record.totalOnsite}d`}>{`${value}đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Tooltip>,
    },
    {
      title: <div className="display--flex">
        <p className="text-align--center mb--0">Tạm ứng
          <br />(4)
        </p>
      </div>,
      dataIndex: 'advancePayment',
      key: '6',
      width: 150,
      align: 'right',
      render: (value: number) => `${value}đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    },
    {
      title:<div className="display--flex">
        <p className="text-align--center mb--0">Hỗ trợ khác
          <br />(5)
        </p>
      </div>,
      dataIndex: 'subsidize',
      key: '7',
      width: 150,
      align: 'right',
      render: (value: number) => `${value}đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    },
    {
      title: <div className="display--flex">
        <p className="text-align--center mb--0">Thực nhận
          <br />(1)+(2)+(3)-(4)+(5)
        </p>
      </div>,
      dataIndex: 'moneyMustSend',
      key: '8',
      fixed: 'right',
      width: 150,
      align: 'right',
      render: (value: number) => <p style={{ fontWeight: 'bold', margin: 0 }}>{`${value}đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>,
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      key: 'note',
      fixed: 'right',
      width: 100,
      align: 'center',
      render: (value: any, record: any ) => <div>
        <Tooltip title={value}>
          <p
            className="m--0"
            style={
            {
              width: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow:  'ellipsis',
            }
          }
        >
            {value}
          </p>
        </Tooltip>
        {!record.state && <EditOutlined className="cursor--pointer" onClick={() => onNote(record.key)} />}
      </div>,
    },
    {
      title: '',
      dataIndex: 'state',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (_value: any, record: any) => <Button htmlType="button" type="primary" onClick={()=>confirm(record.key)} disabled={_value} >Xác thực</Button>,
    },
  ]

  return (
    <>
      {!isEmpty(data) && <Row className="mb--20" justify='end' >
        <Col>
          <Button
            type="primary"
            onClick={ creating }
            >
            <ReloadOutlined className="mr--5" />
            Tạo lại bảng lương
          </Button>
        </Col>
      </Row>}
      <Divider />
      <Row gutter={24} className="mb--20">
        <Col span={24}>
          <div className="layout--table">
            <Table
              footer={footer}
              locale={{ emptyText: (<div className="text-align--center">
                <span>
                  <ContainerOutlined className="font-size--50" /> <br />
                  Dữ liệu tháng trống <br />
                  <Button type="link" htmlType="button" onClick={creating} >Tạo dữ liệu</Button>
                </span>
              </div>),
              }}
              rowClassName={(record: any) => isEmpty(record.error) ? '' : 'color--red'}
              sticky
              pagination={false}
              scroll={{ x: 1000, y:580 }}
              dataSource={data}
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
    salary,
    loading,
  }: {
    salary: TypeListSalary
    loading: {
      effects: Record<string, boolean>
    }
  }) => ({
    dataTable: salary,
    confirmSalary: loading.effects['salary/confirmSalary'],
    createSalary: loading.effects['salary/creatSalary'],
  }),
)(ListMember)
