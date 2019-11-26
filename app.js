const express = require('express')
const app = express()
const port = process.env["PORT"] || 3000

// register our template engine
const tl = require('express-tl')
app.engine('tl', tl)
app.set('view engine', 'tl')

app.get('/', (req, res) => {
    var name = "Stranger"
    res.render('hello', {name})
})

app.get("/calculate", (req, res) => {
    res.render("solution")
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))