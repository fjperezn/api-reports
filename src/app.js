import express from 'express'
import config from './config'
import usersRoutes from './routes/users.routes'
import categoriesRoutes from './routes/categories.routes'

const app=express()

// settings
app.set('port', config.port)

//middlewares

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(usersRoutes)
app.use(categoriesRoutes)

export default app

 