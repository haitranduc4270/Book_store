export type TypeUserAndLogin = {
  status: number
  data?: {
    accessToken: string,
    name: string
    role?: string
    email?: string
    avatar?: {
      url: string
    }
  }
  message?: string
}


export type TypeUserRequest2fa = {
  status: number
  data?: {
    name: string
    role?: string
    avatar?: {
      url: string
    }
  }
  message?: string
}
