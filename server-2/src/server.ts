import express, { Request, Response } from "express";
import './consumer'

const app = express()

app.get('/', (req: Request, res: Response)=> {
  res.status(200).send({ status: 'sucesso' })
})

app.listen(3334, ()=> {
  console.log('Server 2 running in port 3334')
})