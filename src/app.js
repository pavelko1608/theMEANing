const express = require("express")
const router = require("./api")
const parser = require("body-parser")
const app = express()

require("./database")
require("./seed.js")

app.use(express.static("public"))
app.use(parser.json())
app.use("/api", router)
app.listen(3000, () => {
	console.log("Server is running on port 3000")
})




