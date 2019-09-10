const express = require('express')
const basicAuth = require('express-basic-auth')

const app = express()
app.get('/', (req, res) => {
  res.send('👋')
})

app.use(
  '/admin',
  basicAuth({
    challenge: true,
    realm: 'try-now',
    users: { 'admin': 'admin' },
    unauthorizedResponse: 'Restricted area. Please login (admin:admin).'
  }),
  (req, res) => {
    res.send('🔥')
  }
)

app.use('/static', express.static(__dirname + '/static'))

const port = process.env.PORT || 3030
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`)
})
