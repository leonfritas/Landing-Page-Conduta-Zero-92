

(async function insertPublicoFront() {
    const db = require("./db");
    console.log('Começou')
    console.log('insert into publicodados')
    await db.insertPublico({nome:campoNome, email: campoEmail, data: campoData})
    console.log('select * from publicodados')
    const publico = await db.selectPublico();
    console.log(publico)
    

    
    })();

   