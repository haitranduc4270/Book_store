import type { Moment } from 'moment'

export type TypeUser = {
  _id?: String,
  isReset?: boolean,
  name?: String,
  email?: String,
  phone?: String,
  position?: String,
  startWorkAt?: Moment,
  state?: String,
  role?: String,
  dob?: Moment,
  createdAt?: Moment,
  updatedAt?: Moment,
  banksInfo?: any[]
}

export type TypeTreatment = {
  _id?: String,
  employee: {_id: string}[]
  basicSalary?: number,
  onsiteTreatment?: number,
  otTreatment?: number,
  travelTreatment?: number,
  outsourceSalary?: number,
  phoneTreatment?: number,
}

export type TypeProfile = {
  user?: TypeUser
  treatment?: TypeTreatment
}
