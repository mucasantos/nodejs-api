const db = require('../service/db')



const listStudents = async (req, res) => {
    try {
        const [alunos] = await db.query("SELECT * FROM student")
        res.send({ 'alunos': alunos })

    } catch (error) {
        console.log(error)
    }
}

const createStudent = async (req, res) => {

    //descontruir o body - JS em6 (novo formato)
   const {name, email,classe, matricula, gender} = req.body;

   console.log(name)
/*
INSERT INTO Customers
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
*/
    try {
        const [alunos] = await db.query
        ("INSERT INTO student VALUES (? ,?, ?, ?,?,?)",[4, name, classe, matricula,email, gender])
        res.send({ 'alunos': alunos })

    } catch (error) {
        console.log(error)
    }
}

//Get user By ID
const getStudentByID = async (req, res) => {

   const id = req.params // Vem do express!!

   console.log(id.id)
/*
INSERT INTO Customers
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
*/
    try {
         const [aluno] = await db.query("SELECT * FROM student WHERE idstudents = ?", [id.id])
        res.send({ 'alunos': aluno }) 
    } catch (error) {
        console.log(error)
    }
}

module.exports = { listStudents, createStudent , getStudentByID};