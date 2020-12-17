const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

// import
const timeController = require('./controller/controllerTime')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.send('HELOOO GAIS')
})

app.get('/time', timeController.index)
app.get('/time/unix', timeController.unix)

app.listen(port, () => {
    console.log(`Server Running In Port ${port}`)
})