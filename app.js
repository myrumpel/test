const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.status(200).send("<h1>Its response from EXPRESS SEUKA</h1>")
})

app.listen(3000, "localhost", () => {
  console.log("Сервер запущен на порту 3000")
})
