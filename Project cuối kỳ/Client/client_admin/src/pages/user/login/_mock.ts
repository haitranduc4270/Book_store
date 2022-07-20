import type { Request, Response } from 'express'

export default {
  'POST  /api/login/account': (req: Request, res: Response) => {
    const { password, email } = req.body
    if (password === '123123' && email === 'caohv.dev@gmail.com') {
      res.send({
        status: 'ok',
        currentAuthority: 'admin',
      })
      return
    }
    res.send({
      status: 'error',
      currentAuthority: 'guest',
    })
  },
}
