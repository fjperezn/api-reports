import express from 'express'
import config from './config.js'
import usersRoutes from './routes/users.routes.js'
import categoriesRoutes from './routes/categories.routes.js'

const app=express()

// settings
app.set('port', config.port)

//middlewares

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(usersRoutes)
app.use(categoriesRoutes)

export default app

 