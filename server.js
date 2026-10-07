const express = require('express');
const app = express()
const port = 3001

//Para aceitar JSON eu preciso adicionar ao express a opcao json
app.use(express.json())
//padrao urlenconded
app.use(express.urlencoded({ extended: true }))
//Rotas
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send({ 'name': "Samuel" })
})

app.post('/products', (req, res) => {
    res.send('Recebi um post')
})

app.post('/signup', (req, res) => {
    console.log(req.body)
    res.send('Recebi um post')
})

//middleware global

app.use((req, res, next) => {

    console.log(req.url)
    console.log("cai no middleware")
    res.status(404).send("Rota não encontrada...")

    next();
})

//Servidor iniciado

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
