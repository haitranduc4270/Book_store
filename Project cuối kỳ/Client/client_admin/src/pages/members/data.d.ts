export type TypeMember = {
  createdAt?: string
  updatedAt?: string
  _id?: number
  role?: string
  personalEmail?: string
  email?: string
  phone?: string
  position?: string
  startWorkAt?: string
  state?: string
  dob?: string
  name?: string
  currentLocation? : string
  hometown?: string
}

export type TypeListMember = {
  statusCode: number
  data?: TypeMember[]
  total?: number
  count?: number
  message?: string
}

export type Image = {
  statusCode: number
  data?: {
    id?: number
    key?: string
    url?: string
  }
  message?: string
}
