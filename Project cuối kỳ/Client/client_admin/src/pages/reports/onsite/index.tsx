import type { FC } from 'react'
import { useState } from 'react'
import React from 'react'
import { GridContent } from '@ant-design/pro-layout'
import { ListOnsite, SearchOnsite } from './components'

type Props = {}

const News: FC<Props> = () => {
  const [condition, setCondition] = useState<any>()

  return (
    <GridContent>
      <div className="layout--search">
        <SearchOnsite setCondition={setCondition} />
      </div>
      <div className="layout--main">
        <div className="layout--main__content">
          <ListOnsite condition={condition} />
        </div>
      </div>
    </GridContent>
  )
}

export default News
