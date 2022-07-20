export type TypeOnsite = {
  _id?: number
  employee?: {_id: string | '', name: string | ''}
  project?: {_id: string | '', name: string | ''}[]
  date?: string
  from?: string
  to?: string
  approved?: number
}

export type TypeListOnsite = {
  status: number
  data?: TypeOnsite[]
  total?: number
  message?: string
}
