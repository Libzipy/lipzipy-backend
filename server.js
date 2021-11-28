const express = require('express')
const cors = require('cors')

// create express app
const app = express()

require('dotenv').config()

// Setup server port
const PORT = process.env.PORT

app.use(cors())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json())

// define a root route
app.get('/', (req, res) => {
  res.send('Başlandı...')
})

// Require routes
const UserRouter = require('./src/routes/user.routes')

const LibraryRouter = require('./src/routes/library.routes')

const BookRouter = require('./src/routes/book.routes')

const AuthorRouter = require('./src/routes/author.routes')

const TypeRouter = require('./src/routes/type.routes')

const User_Book_Router = require('./src/routes/user_book.routes')

const Author_Book_Router = require('./src/routes/author_book.routes')

const Library_Book_Router = require('./src/routes/library_book.routes')

const Type_Book_Router = require('./src/routes/type_book.routes')

// using as middleware

// GENEL USER VE REGİSTER İŞLEMLERİ
app.use('/api/user', UserRouter)

// GENEL KÜTÜPHANE İŞLEMLERİ
app.use('/api/library', LibraryRouter)

// GENEL KİTAP İŞLEMLERİ
app.use('/api/book', BookRouter)

// GENEL YAZAR İŞLEMLERİ
app.use('/api/author', AuthorRouter)

// GENEL Type İŞLEMLERİ
app.use('/api/type', TypeRouter)

// KİŞİNİN KİTAP ÖDÜNÇ SİSTEMİ
app.use('/api/user_book', User_Book_Router)

// KİTAPLARIN YAZARLARI SİSTEMİ
app.use('/api/author_book', Author_Book_Router)

// KÜTÜPHANELERİN KİTAPLARI SİSTEMİ
app.use('/api/library_book', Library_Book_Router)

// KİTAPLARIN TÜRLERİ SİSTEMİ
app.use('/api/type_book', Type_Book_Router)

// listen for requests
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
