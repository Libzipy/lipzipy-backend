const express = require('express')
const dotenv = require('dotenv')
const router = express.Router()

// create express app
const app = express()

dotenv.config()

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Setup server port
const port = 5000

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json())

// define a root route
app.get('/', (req, res) => {
  res.send('Başlandı...')
})

// Require user routes
const UserRouter = require('./src/routes/user.routes')

const LibraryRouter = require('./src/routes/library.routes')

const BookRouter = require('./src/routes/book.routes')

// using as middleware
app.use('/api/user', UserRouter)

app.use('/api/library', LibraryRouter)

app.use('/api/book', BookRouter)

// listen for requests
app.listen(process.env.PORT || port, () => {
  console.log(`Server is listening on port ${port}`)
})
