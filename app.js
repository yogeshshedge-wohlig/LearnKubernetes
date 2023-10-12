const express = require('express')
const app = express()
const port = 3001

const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);

app.get('/', (req, res) => {
  console.log('Hello World Log Version 0.0.4 !')
  getLog()
  res.send('Welcome Hello World 2!')

})

app.listen(port, () => {
  getLog()
  console.log(`2.Example app listening on port ${port}`)
})

function getLog() {
  const types = ['object', 'array', 'string', 'integer', 'float', 'boolean']
  for (const type of types) {
    console.log('JSON Data :: ', myJSON , ` Application Version - 0.0.4 and A JavaScript type is | Application Version - 0.0.4 and A JavaScript type is | Application Version - 0.0.4 and A JavaScript type is| Application Version - 0.0.4 and A JavaScript type is| Application Version - 0.0.4 and A JavaScript type is | Application Version - 0.0.4 and A JavaScript type is | Application Version - 0.0.4 and A JavaScript type is | Application Version - 0.0.4 and A JavaScript type is| Application Version - 0.0.4 and A JavaScript type is| Application Version - 0.0.4 and A JavaScript type is | Application Version - 0.0.4 and A JavaScript type is: ${type}`)
  }
}