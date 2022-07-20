import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Row, Col, Table, Button, Space, Badge, Divider } from 'antd'
import type { Dispatch } from 'umi'
import { Link } from 'umi'
import { connect, FormattedMessage, useIntl } from 'umi'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { convertPosition, modalConfirmDelete } from '@/utils/utils'
import type { TypeMember, TypeListMember } from '../../data'
import ModalCreateOrEdit from './ModalCreateOrEdit'

type Props = {
  dispatch: Dispatch
  dataTable: TypeListMember
  creating?: boolean
  editing?: boolean
  deleting?: boolean
  condition: any
}

const ListMember: FC<Props> = ({ dispatch, dataTable, creating, deleting, condition }) => {
  const { formatMessage } = useIntl()
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    if (condition) {
      dispatch({
        type: 'members/searchMember',
        payload: {
          query: `?pageNo=${pageNo}&pageSize=${pageSize}`,
          data: condition,
        },
      })
    } else {
      dispatch({
        type: 'members/getMembers',
        payload: {
          query: `?pageNo=${pageNo}&pageSize=${pageSize}`,
        },
      })
    }
    setLoading(false)
  }, [dispatch, pageNo, pageSize, condition])

  useEffect(() => {
    if (deleting) {
      setLoading(true)
    }
    if (deleting === false) {
      setSelectedRowKeys([])
      if (condition) {
        dispatch({
          type: 'members/searchMember',
          payload: {
            query: `?pageNo=${pageNo}&pageSize=${pageSize}`,
            data: condition,
          },
        })
      } else {
        dispatch({
          type: 'members/getMembers',
          payload: {
            query: `?pageNo=${pageNo}&pageSize=${pageSize}`,
          },
        })
      }
      setLoading(false)
    }
  }, [deleting, dispatch, pageNo, pageSize, condition])

  useEffect(() => {
    if (creating === true) {
      setLoading(true)
    }
    if (creating === false) {
      dispatch({
        type: 'members/getMembers',
        payload: {
          query: `?pageNo=${pageNo}&pageSize=${pageSize}`,
        },
      })
      setLoading(false)
    }
  }, [creating, dispatch, pageNo, pageSize])

  const onChangeSelectRow = (values: any) => {
    setSelectedRowKeys(values)
  }

  const onChangePagination = (value: number) => {
    setPageNo(value)
    setSelectedRowKeys([])
    // dispatch({
    //   type: 'members/getMembers',
    //   payload: {
    //     query: `?limit=10&sort=createdAt,DESC&page=${value}`,
    //   },
    // })
  }

  const onDelete = (values: any) => {
    const onOk = () => {
      dispatch({
        type: 'members/deleteMember',
        payload: {
          data: {
            employeeDelete: values,
          },
        },
      })
    }
    modalConfirmDelete(onOk)
  }

  const dataSource = dataTable?.data?.map((item: TypeMember) => ({ key: item._id, ...item })) || []

  const convertStatus = (value: any) => {
    switch (value) {
      case 'DOING':
        return {
          name: 'doing',
          color: 'success',
        }
      case 'PENDING':
        return {
          name: 'pending',
          color: 'warning',
        }
      case 'ENTIRE':
        return {
          name: 'entire',
          color: 'error',
        }
      default:
        return {
          name: 'default',
          color: 'default',
        }
    }
  }

  const columns: any = [
    {
      title: formatMessage({ id: 'common.name' }),
      dataIndex: 'name',
      key: 'name',
      render: (_value: string, record: any) => (
        <Link className="pl--0" to={{ pathname: '/members/profile', state: { record } }}>
          {_value}
        </Link>
      ),
    },
    {
      title: formatMessage({ id: 'common.position' }),
      dataIndex: 'position',
      key: 'position',
      render: (_value: string) => convertPosition(_value),
    },
    {
      title: formatMessage({ id: 'common.email' }),
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: formatMessage({ id: 'common.status' }),
      dataIndex: 'state',
      key: 'state',
      render: (_value: string) => {
        const status: any = convertStatus(_value)
        return (
          <Badge
            status={status.color}
            text={formatMessage({ id: `members.status.${status.name}` })}
          />
        )
      },
    },
    {
      title: formatMessage({ id: 'common.phone' }),
      dataIndex: 'phone',
      key: 'phone',
      sorter: (a: any, b: any) => a.phone.localeCompare(b.phone),
    },
    {
      title: formatMessage({ id: 'common.action' }),
      key: 'action',
      render: (_value: string, record: any) => (
        <div className="display--flex justify-content--between">
          <Button className="pl--0" type="link" htmlType="button" href="/members/profile">
            <Link className="pl--0" to={{ pathname: '/members/profile', state: { record } }}>
              {formatMessage({ id: 'common.edit' })}
            </Link>
          </Button>
          <Button
            className="pl--0"
            type="link"
            htmlType="button"
            onClick={() => onDelete([record.key])}
            danger
          >
            {formatMessage({ id: 'common.delete' })}
          </Button>
        </div>
      ),
      width: 100,
    },
  ]

  return (
    <>
      <div className="layout--main__title">
        <FormattedMessage id="members.listMember" />
      </div>
      <Divider />
      <Row gutter={24} className="mb--24">
        <Col md={12} xs={24}>
          {selectedRowKeys.length !== 0 && (
            <Button danger onClick={() => onDelete(selectedRowKeys)}>
              <DeleteOutlined className="mr--5" />
              <FormattedMessage
                id="button.delete.selected"
                values={{ count: selectedRowKeys.length }}
              />
            </Button>
          )}
        </Col>
        <Col md={12} xs={24}>
          <Space className="w--full justify-content--flexEnd">
            <Button
              type="primary"
              onClick={() => {
                setIsVisibleModal(true)
              }}
            >
              <PlusOutlined className="mr--5" />
              <FormattedMessage id="button.create" />
            </Button>
          </Space>
        </Col>
      </Row>
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
      <ModalCreateOrEdit isVisibleModal={isVisibleModal} setIsVisibleModal={setIsVisibleModal} />
    </>
  )
}

export default connect(
  ({
    members,
    loading,
  }: {
    members: TypeMember
    loading: {
      effects: Record<string, boolean>
    }
  }) => ({
    dataTable: members,
    creating: loading.effects['members/createMember'],
    editing: loading.effects['members/editMember'],
    deleting: loading.effects['members/deleteMember'],
    blocking: loading.effects['members/blockMember'],
  }),
)(ListMember)
