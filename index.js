const express = require('express')
const cors = require('cors')
const article = require('./article')
const permission = require('./permission')
const role = require('./role')
const sys = require('./sys')
const user = require('./user')
const userManage = require('./user-manage')

const app = express()
const port = 3000

app.use(cors())

article(app)
permission(app)
role(app)
sys(app)
user(app)
userManage(app)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`\n\t http://localhost:${port}`)
})
