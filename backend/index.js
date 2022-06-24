const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());
app.use(express.urlencoded());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "skills"
})

app.post("/", function (req, res) {

    let name = req.body.name;
    let url = req.body.url;
    let nivel = req.body.nivel;
    let area = req.body.area;
    let resume = req.body.resume;

    connection.connect((err) => {
        if(err){
            return console.error(f`Error: ${err.message}`)
        }

        connection.query(`INSERT INTO myskills (Nome, Url, Nivel, Area, Descricao) VALUES("${name}", "${url}", "${nivel}", "${area}","${resume}")`)
    })

    res.send("Ok")  
            
})

app.listen(3100);