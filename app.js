require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const userRoute = require("./routers/userRoute")
const PORT = process.env.PORT

app.get("/api/v1", (request, response) => {
    response.status(200).send({message: "Server running"})
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/user', userRoute)

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected to db successfully'))

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})