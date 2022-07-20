export type TypeOT = {
  _id?: number
  employee?: {_id: string | '', name: string | ''}
  project?: {_id: string | '', name: string | ''}[]
  date?: string
  from?: string
  to?: string
  approved?: number,
  note: string,
}

export type TypeListOT = {
  status: number
  data?: TypeOT[]
  total?: number
  message?: string
}
