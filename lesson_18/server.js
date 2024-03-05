const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require("mongodb")
const bodyParser = require('body-parser')
const app = express()
const port = 8000

// const uri = "mongodb+srv://kyrylko09:NKimnzatcROuCupl@cluster0.h2b9rlm.mongodb.net/"
const uri = "mongodb+srv://kyrylko09:NKimnzatcROuCupl@cluster0.h2b9rlm.mongodb.net/"

const client = new MongoClient(uri)

app.use(cors())
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


const lessonDb = client.db('lessons')
const notesCollection = lessonDb.collection('notes')

// parse application/json
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  const notes = await notesCollection.find().toArray()
  console.log('notes', notes)
  res.send(JSON.stringify(notes))
})

app.get('/lesson', (req, res) => {
  res.send(`method: ${req.method}, url: ${req.url}`)
})

app.post('/todo', async (req, res) => {
  res.send(JSON.stringify(`method: ${req.method}, url: ${req.url}`))
})

app.post('/note', async (req, res) => {
  console.log('req.body', req.body)
  notesCollection.insertOne(req.body)
  res.send(JSON.stringify('Note Added'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})