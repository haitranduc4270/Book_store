export type TypeSalary = {
  createdAt?: string
  updatedAt?: string
  _id?: number
  advancePayment?: number
  ot?: { total?: number, cost?: number}
  subsidize?: string
  onsite?: { total?: number, cost?: number}
  moneyMustSend?: string
  state?: boolean
  treatmentInformation?: {basicSalary? : number}
  userDetail?: {name?: string, _id?: string}
  note?: string
  paidDate?: string
}

export type TypeErrorSalary = {
  error?: any[]
}

export type TypeListSalary = {
  status: number,
  data?: TypeSalary[]
  dataError?: TypeErrorSalary
}
