import express from 'express'
import cors from 'cors'

import { readFileSync } from "fs";
const fileUrl = new URL("./test-data/groups.json", import.meta.url);
const groupsData = JSON.parse(readFileSync(fileUrl));

const app = express()
app.use(cors())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/test', (req, res) => {
    res.send(groupsData)
})
