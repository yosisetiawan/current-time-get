const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// import
const timeController = require('./controller/controllerTime')

app.use(bodyParser.json())
app.use(cors())

app.get('/time', timeController.index)
app.get('/time/unix', timeController.unix)

app.listen(8080, () => {
    console.log('Server Running In Port 8080')
})