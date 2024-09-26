const express = require('express')
const app = express()

require('dotenv').config()
const API_KEY = process.env.API_KEY

const serveGifs = async (req, res, next ) => {
  const res = await fetch(``)
  const data = await response.json()
  res.send(data)
}

app.get('/api/gifs', serveGifs)

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})