import app from './app.js'
import cors from 'cors'

app.use(cors())

app.listen(app.get('port'))

console.log('Server on Port', app.get('port'))