const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  console.log('Hello World Log !')
  res.send('Welcome Hello World!')

})

app.listen(port, () => {
    
  console.log(`2.Example app listening on port ${port}`)
})