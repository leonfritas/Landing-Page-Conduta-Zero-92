

(async function insertPublicoFront() {
    const db = require("./db");
    console.log('Começou')
    console.log('insert into publicodados')
    await db.insertPublico({nome:'teste3', email: 'teste3', data: 'teste3'})
    console.log('select * from publicodados')
    const publico = await db.selectPublico();
    console.log(publico)
    

    
    })();

   