import type { FC } from 'react'
import { useState } from 'react'
import { GridContent } from '@ant-design/pro-layout'
import { ListSalary, SearchSalary } from './components'

type Props = {}

const Members: FC<Props> = () => {
  const [condition, setCondition] = useState<any>()
  return (
    <GridContent>
      <div className="layout--search">
        <SearchSalary setCondition={setCondition} />
      </div>
      <div className="layout--main">
        <div className="layout--main__content">
          <ListSalary condition={condition} />
        </div>
      </div>
    </GridContent>
  )
}

export default Members
