import express from 'express'
import profileRouter from './routes/profileRouter.js'
import database from './src/config/database.js'


const app = express()
const port = 3000
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/profile', profileRouter)

app.listen(port, () => {
    console.log(`Stride backend listening on port ${port}`)
})
