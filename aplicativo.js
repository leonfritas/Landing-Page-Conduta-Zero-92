const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '01042018',
    database: 'condutazero92'

})

connection.connect( function(err){
    console.log('deu certo')
})



connection.query(`insert into publicoDados (nomePublico, emailPublico, dataNascimentoPublico) values ('leo', 'leo', 'leo')`, (err, rows, fields)=>{
    if (!err){
        console.log('resultado', rows)
    }else{
        console.log(err)
    }

})



