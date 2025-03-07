const express = require('express')
const app = express()
const port = 8001

app.get('/', (req, res) => {
  res.send('Hello Express')
})

app.get('/health', (req, res) => {
    res.send('OK')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

