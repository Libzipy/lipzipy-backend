const express = require('express')
const cors = require('cors')

// create express app
const app = express()

// Setup server port
const PORT = process.env.PORT || 8080

app.use(cors())
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
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
