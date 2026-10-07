const express = require('express');

const studentRoutes = require('./routes/students-routes')

const app = express()
const port = 3001

//Para aceitar JSON eu preciso adicionar ao express a opcao json
app.use(express.json())
//padrao urlenconded
app.use(express.urlencoded({ extended: true }))

//Rotas
app.use('/students', studentRoutes)

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
