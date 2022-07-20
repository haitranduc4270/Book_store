import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import {
  Row,
  Col,
  Table,
  Button,
  Space,
  Badge,
  Divider,
  Image
} from 'antd'
import type { Dispatch } from 'umi'
import { connect, FormattedMessage, useIntl } from 'umi'
import {
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import moment from 'moment'
import { modalConfirmDelete } from '@/utils/utils'
import type {  TypeProject,TypeListProject } from '../../data'
import ModalCreateOrEdit from './ModalCreateOrEdit'

type Props = {
  dispatch: Dispatch
  dataTable: TypeListProject
  creating?: boolean
  editing?: boolean
  deleting?: boolean
  condition: any
}

const ListAdmin: FC<Props> = ({
  dispatch,
  dataTable,
  creating,
  deleting,
  editing,
  condition,
}) => {
  const { formatMessage } = useIntl()
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [modalData, setModalData] = useState<{
    modalType: 'create' | 'edit'
    record?: any
  }>({ modalType: 'create' })
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    if (condition) {
      dispatch({
        type: 'projects/searchProject',
        payload: {
          query: `?pageNo=${pageNo}&pageSize=${pageSize}`,
          data: condition,
        },
      })
    } else {
      dispatch({
        type: 'projects/getListProjects',
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
          type: 'projects/searchProject',
          payload: {
            query: `?pageNo=${pageNo}&pageSize=${pageSize}`,
            data: condition,
          },
        })
      } else {
        dispatch({
          type: 'projects/getListProjects',
          payload: {
            query: `?pageNo=${pageNo}&pageSize=${pageSize}`,
          },
        })
      }
      setLoading(false)
    }
  }, [deleting, dispatch, pageNo, pageSize, condition])

  useEffect(() => {
    if (creating || editing) {
      setLoading(true)
    }
    if (creating === false || editing === false) {
      dispatch({
        type: 'projects/getListProjects',
        payload: {
          query: `?pageNo=${pageNo}&pageSize=${pageSize}`,
        },
      })
      setLoading(false)
    }
  }, [creating, editing, dispatch, pageNo, pageSize])

  const onChangeSelectRow = (values: any) => {
    setSelectedRowKeys(values)
  }

  const onChangePagination = (value: number) => {
    setPageNo(value)
    setSelectedRowKeys([])
    // dispatch({
    //   type: 'projects/getListProjects',
    //   payload: {
    //     query: `?pageSize=${pageSize}&pageNo=${pageNo}`,
    //   },
    // })
  }



  const onDelete = (values: any) => {
    const onOk = () => {
      dispatch({
        type: 'projects/deleteProject',
        payload: {id: values},
      })
    }
    modalConfirmDelete(onOk)
  }


  const dataSource = dataTable.response



  const convertStatus = (value: any) => {
    switch (value) {
      case 'DONE':
        return {
          name: 'done',
          color: 'success',
        }
      case 'DOING':
        return {
          name: 'doing',
          color: 'processing',
        }
      case 'PENDING':
        return {
          name: 'pending',
          color: 'warning',
        }
      case 'REJECT':
        return {
          name: 'reject',
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
      title: 'Thể loại',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: "Ảnh",
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      render:(_value:string) =>{
        return <Image src={_value} width={100}/>
      }
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Tác giả',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Giới thiệu',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: formatMessage({ id: 'common.action' }),
      key: 'action',
      render: (_value: string, record: any) => {
        return (
          <div className="display--flex justify-content--between">
            <Button className="pl--0" type="link" htmlType="button" onClick={() => {
              setModalData({
                modalType: 'edit',
                record,
              })
              setIsVisibleModal(true)
            }}>
              {formatMessage({ id: 'common.edit' })}
            </Button>
            <Button className="pl--0" type="link" htmlType="button" onClick={() => onDelete(record._id)} danger>
              {formatMessage({ id: 'common.delete' })}
            </Button>
          </div>
        )
      },
      width: 100,
    },
  ]

  return (
    <>
      <div className="layout--main__title">
        <FormattedMessage id="project.title" />
      </div>
      <Divider />
      <Row gutter={24} className="mb--24">
        <Col md={12} xs={24}>
          {selectedRowKeys.length !== 0 && (
            <Button danger onClick={ () => onDelete(selectedRowKeys)}>
              <DeleteOutlined className="mr--5" />
              {formatMessage({ id: 'button.delete.selected' }, { count: selectedRowKeys.length })}
            </Button>
          )}
        </Col>
        <Col md={12} xs={24}>
          <Space className="w--full justify-content--flexEnd">
            <Button
              type="primary"
              onClick={() => {
                setModalData({
                  modalType: 'create',
                })
                setIsVisibleModal(true)
              }}
            >
              <PlusOutlined className="mr--5" />
              {formatMessage({ id: 'button.create' })}
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
              pagination={{
                size:"small",
                position: ['bottomRight'],
                showSizeChanger: true,
                // total: dataTable?.total,
                onChange: (value: number) => onChangePagination(value),
                showTotal: (total: number, range: any) =>`${range[0]} - ${range[1]} of ${total} items`,
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
      <ModalCreateOrEdit
        modalData={modalData}
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
      />
    </>
  )
}

export default connect(
  ({
    projects,
    loading,
  }: {
    projects: TypeListProject
    loading: {
      effects: Record<string, boolean>
    }
  }) => ({
    dataTable: projects,
    creating: loading.effects['projects/createProject'],
    editing: loading.effects['projects/editProject'],
    deleting: loading.effects['projects/deleteProject'],
  }),
)(ListAdmin)
