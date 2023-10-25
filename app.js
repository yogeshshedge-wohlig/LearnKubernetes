const express = require('express')
const app = express()
const port = 3001
const obj = [
  {
    color: "red",
    value: "#f00"
  },
  {
    color: "green",
    value: "#0f0"
  },
  {
    color: "blue",
    value: "#00f"
  }
]

app.listen(port, () => {
  console.log(`Example app - Version 0.0.1 listening on port ${port}`)
})

app.get('/', (req, res) => {
  console.log('Welcome to Sample Node Application')
  res.send({data:"Welcome to Sample Node Application"})
})

app.get('/withStringify', (req, res) => {
  console.log('Data withStringify :: ')
  let data = JSON.stringify(obj);
  console.log('WithStringify :: ', data)
  res.send(data)
})

app.get('/withoutStringify', (req, res) => {
  console.log('Data withoutStringify :: ')
  let data = obj
  console.log('WithoutStringify :: ', data)
  res.send(data)

})