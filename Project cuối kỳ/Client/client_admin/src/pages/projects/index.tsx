import type { FC } from 'react'
import { useState } from 'react'
import React from 'react'
import { GridContent } from '@ant-design/pro-layout'
import { ListProject, SearchProject } from './components'

type Props = {}

const General: FC<Props> = () => {
  const [condition, setCondition] = useState<any>()
  return (
    <GridContent>
      <div className="layout--main">
        <div className="layout--main__content">
          <ListProject condition={condition} />
        </div>
      </div>
    </GridContent>
  )
}

export default General
