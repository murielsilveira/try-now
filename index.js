const express = require('express')

const app = express()
app.get('/', (req, res) => {
  res.send('👋')
})

const port = process.env.PORT || 3030
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`)
})
