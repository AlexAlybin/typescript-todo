const express = require("express")
const cors = require("cors")
const router = require("./routes/router")
const connection = require("./db")

const app = express()
connection();



app.use(express.json())
app.use(cors())
app.use("/api", router)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`))