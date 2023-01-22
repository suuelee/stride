import express from 'express'
import profileRoute from './routes/profileRoute.js'
import userTripRoute from './routes/userTripRoute.js'
import database from './src/config/database.js'


const app = express()
const port = 3000
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/profile', profileRoute)

app.use('/usertrip', userTripRoute)

app.listen(port, () => {
    console.log(`Stride backend listening on port ${port}`)
})
