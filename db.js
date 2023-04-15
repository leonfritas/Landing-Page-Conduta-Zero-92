


// async function connect(){
//     console.log('0')

//     if(global.connection && global.connection.state !== 'disconnected') return global.connection;

//     console.log('1')

//     const mysql = require("mysql2/promise");
//     console.log('2')
//     const connection = await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '01042018',
//         database: 'condutazero92'
//       });
//     console.log('Conectou no mysql')
    
//     global.connection = connection;
//     return connection;
// }

//     async function selectPublico(){
//       const conn = await connect();
//       const [rows] = await conn.query('SELECT * FROM PUBLICODADOS')
//       return rows;
//     }

//     async function insertPublico(publico){
//         const conn = await connect()
//         const sql = 'insert into publicodados(nomePublico, emailPublico, dataNascimentoPublico) values (?,?,?)'
//         const values = [publico.nome, publico.email, publico.data]
//         await conn.query(sql, values)
//       }
     

     
  




// module.exports = {selectPublico, insertPublico}