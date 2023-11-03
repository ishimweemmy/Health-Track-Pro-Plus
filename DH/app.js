import express from 'express'
import cors from 'cors'
import { patientDataRoutes, SensorDataRoutes } from './src/routes/index.js'
import { connectToDB } from './src/config/connect.js'
import { synchronizeDB } from './src/config/synchroniseDB.js'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
})

io.on('connection', (socket) => {
    console.log('A user is connected')

    socket.on('message', (message) => {
        console.log(`user with id: ${socket.id} sent a message: ${message}`)
    })

    socket.on('disconnect', () => {
        console.log(`A user with an id ${socket.id} disconnected!`)
    })
})

app.use(cors({
    origin: "*"
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/patients', patientDataRoutes)
app.use('/api/sensors', SensorDataRoutes)

const startServer = async () => {
    await connectToDB()
    await synchronizeDB()
    server.listen(4000, () => console.log('server is up and running...'))
}

startServer()

export { io }
