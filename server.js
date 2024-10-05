const express = require("express")
const conn = require("./routes/dbconfig")
const cookie = require("cookie-parser")

const app = express()

const PORT = process.env.PORT || 4000

app.use("/js", express.static(__dirname + "/public/js"))
app.use("/css", express.static(__dirname + "/public/css"))

app.set("view engine", "ejs")
app.set("views", "./views")

app.use(cookie())
app.use(express.json())

app.use("/", require("./routes/pages"))
app.use("/api", require("./controllers/auth"))

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
