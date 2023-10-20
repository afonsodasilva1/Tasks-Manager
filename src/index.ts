import bodyParser = require('body-parser')
import routes from './routes'
import * as express from 'express'

const app = express()

app.use(bodyParser.json())
app.use(routes)

app.listen(3333)
