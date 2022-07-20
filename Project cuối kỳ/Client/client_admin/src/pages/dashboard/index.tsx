import { ProjectOutlined, TeamOutlined } from '@ant-design/icons'
import { GridContent } from '@ant-design/pro-layout'
import { Card, Col, Row, Spin } from 'antd'
import type { FC } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import type { Dispatch } from 'umi'
import { connect, history } from 'umi'
import type { TypeListMember } from '../members/data'
import type { TypeListProject } from '../projects/data'
import './style.less'

type Props = {
  dispatch: Dispatch
  projects: TypeListProject
  members: TypeListMember
}

const Dashboard: FC<Props> = ({ dispatch, projects, members }) => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fc = async () => {
      setLoading(true)
      await dispatch({
        type: 'projects/getListProjects',
        payload: {
          query: `?pageNo=${1}&pageSize=${999}`,
        },
      })
      await dispatch({
        type: 'members/getMembers',
        payload: {
          query: `?pageNo=1&pageSize=999`,
        },
      })
      setLoading(false)
    }
    fc()
  }, [dispatch])

  const configCol = {
    xs: { span : 12 },
    xl: { span : 8 },
  }

  const redirectMembers = () => {
    history.push('/members')
  }
  const redirectProjects = () => {
    history.push('/projects')
  }

  return (
    <GridContent>
      <Spin spinning={loading}>
        <Row gutter={20}>
          <Col {...configCol}>
            <Card hoverable={true} onClick={redirectMembers}>
              <div className="dashboard__card">
                <div className="dashboard__card--text">
                  <div>
                    <p className="color--gray6">Tổng số nhân viên</p>
                    <p className="font-size--70 m--0" >{members?.total}</p>
                  </div>
                </div>
                <div className="dashboard__card--icon">
                  <TeamOutlined className="font-size--100" />
                </div>
              </div>
            </Card>
          </Col>
          <Col {...configCol}>
            <Card hoverable={true} onClick={redirectProjects} >
              <div className="dashboard__card">
                <div className="dashboard__card--text">
                  <div>
                    <p className="color--gray6">Tổng số dự án</p>
                    <p className="font-size--70 m--0">{projects?.total}</p>
                  </div>
                </div>
                <div className="dashboard__card--icon">
                  <ProjectOutlined className="font-size--100" />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Spin>
    </GridContent>
  )
}

export default connect(
  ({ projects, members }: {projects: TypeListProject, members: TypeListMember}) => ({
    projects, members,
  }),
)(Dashboard)
