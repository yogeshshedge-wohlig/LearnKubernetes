const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  console.log('Hello World Log !')
  getLog()
  res.send('Welcome Hello World!')

})

app.listen(port, () => {
  getLog()
  console.log(`2.Example app listening on port ${port}`)
})

function getLog() {
  const types = ['object', 'array', 'string', 'integer', 'float', 'boolean']
  for (const type of types) {
    console.log(`A JavaScript type is: ${type}`)
  }
}