import type { FC } from 'react'
import { useState } from 'react'
import React from 'react'
import { GridContent } from '@ant-design/pro-layout'
import { ListOT } from './components'
import SearchOT from './components/SearchOT'

type Props = {}

const News: FC<Props> = () => {
  const [condition, setCondition] = useState<any>()

  return (
    <GridContent>
      <div className="layout--search">
        <SearchOT setCondition={setCondition} />
      </div>
      <div className="layout--main">
        <div className="layout--main__content">
          <ListOT condition={condition} />
        </div>
      </div>
    </GridContent>
  )
}

export default News
