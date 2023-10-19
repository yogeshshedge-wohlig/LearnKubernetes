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
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	},
  {
		color: "a",
		value: "#000"
	},
  {
		color: "b",
		value: "#000"
	},
  {
		color: "c",
		value: "#000"
	},
  {
		color: "d",
		value: "#000"
	}
]

const myJSON = JSON.stringify(obj);

app.get('/', (req, res) => {
  console.log('Hello World Log Version 0.0.3 !')
  const types = ['object', 'array', 'string', 'integer', 'float', 'boolean']
  var arr = []
  let data = {}
  for (const type of types) {
    console.log( 'myJSONData without Stringify :: ', obj)
    arr.push(type)
  }
  data.arrData= arr
  data.myJSON= obj
  res.send(data)

})

app.listen(port, () => {
  //getLog()
  console.log(`3.Example app listening on port ${port}`)
})

function getLog() {
  const types = ['object', 'array', 'string', 'integer', 'float', 'boolean']
  for (const type of types) {
   // console.log( 'myJSON :: ', myJSON ,  ` Application Version - 0.0.4 and A JavaScript type is | Application Version - 0.0.4 and A JavaScript type is | Application Version - 0.0.4 and A JavaScript type is| Application Version - 0.0.4 and A JavaScript type is| Application Version - 0.0.4 and A JavaScript type is | Application Version - 0.0.4 and A JavaScript type is | Application Version - 0.0.4 and A JavaScript type is | Application Version - 0.0.4 and A JavaScript type is| Application Version - 0.0.4 and A JavaScript type is| Application Version - 0.0.4 and A JavaScript type is | Application Version - 0.0.4 and A JavaScript type is: ${type}`)
  }
}