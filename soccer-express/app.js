const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(new Date().toLocaleString())
})

app.listen(port, () => {
  console.log(`Server Started at  ${new Date().toLocaleString()}`)
})