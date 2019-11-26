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
    var name = req.query.name;
    var a = req.query.a;
    var b = req.query.b;
    var answer = Number(a) + Number(b);

    res.render("solution", { name, a, b, answer})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))