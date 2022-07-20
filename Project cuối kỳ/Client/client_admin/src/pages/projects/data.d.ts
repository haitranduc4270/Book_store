export type TypeProject = {
  _id?: any
  type: string
  thumbnail: string
  quantity: number
  author: string
  description: string
  price: string
  name: string
  id: string
}

export type TypeListProject = {
  status: string
  response: TypeProject[]
}
