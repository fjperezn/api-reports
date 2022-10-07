import app from './app.js'

app.use(cors({
    origin: '*'
}));

app.listen(app.get('port'))
 
console.log('Server on Port',app.get('port'))