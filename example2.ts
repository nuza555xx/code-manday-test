import express, { Request, Response } from "express";
import axios from "axios";
const app = express()
const port = 3030

app.get('/data', (_: Request, res: Response) => {
    const data: Record<string, number> = { a: 1, b: 2 }
    res.json(data)
})

app.get('/', async (_: Request, res: Response) => {
    const { data } = await axios.get(`http://localhost:${port}/data`)
    res.json(data)
})

app.listen(port, () => { console.log(`[DEBUG] ${Date.now()} listening`) })