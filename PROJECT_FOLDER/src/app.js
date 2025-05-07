const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const dotenv = require('dotenv')
const routes = require('./routes/index')

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({
	extended: false,
	parameterLimit: 5000,
	limit: '50mb'
}))

app.use('/api', routes)
app.listen(port, () => console.log(`🚀 ~ App listening on http://127.0.0.1:${port}`))