import express, { Request, Response } from "express";
import { createServer } from "http";
//import './consumer'

const app = express()

app.get('/', (req: Request, res: Response)=> {
  res.status(200).send({ status: 'sucesso' })
})

const server = createServer(app)
server.keepAliveTimeout = 1000

server.listen(3333, ()=> {
  console.log('Server 1 running in port 3333')
  console.log(server.keepAliveTimeout)
})

