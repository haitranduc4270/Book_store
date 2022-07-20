import type { FC } from 'react'
import { useState } from 'react'
import React from 'react'
import { GridContent } from '@ant-design/pro-layout'
import { ListMember, SearchMember } from './components'

type Props = {}

const Members: FC<Props> = () => {
  const [condition, setCondition] = useState<any>()
  return (
    <GridContent>
      <div className="layout--search">
        <SearchMember setCondition={setCondition} />
      </div>
      <div className="layout--main">
        <div className="layout--main__content">
          <ListMember condition={condition} />
        </div>
      </div>
    </GridContent>
  )
}

export default Members
