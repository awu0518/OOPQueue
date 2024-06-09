const express = require('express')
const connectDB = require('./config/database');

connectDB(); // connect to the database

const app = express()
const port = 3000

app.use(express.json()); // initialize middleware

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})