import { Request, Response } from 'express'
export const getUsers = (req: Request, res: Response) => {
  res.send('Obteniendo usuarios')
}
export const createUser = (req: Request, res: Response) => {
  res.send('Usuario creado')
}
