const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const courses =  require('./data/courses.json');

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get ('/courses', (req, res)=>{

    res.send(courses)
})

app.get ('/courses/:id', (req, res)=>{
  const i
  if(){
    res.send(courses)
  }
})
app.listen(port, () => {
  console.log(`courses-bangla app listening on port ${port}`)
})