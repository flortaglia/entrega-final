const fs = require( 'fs')
const path = require( 'path') 

async function escribir(messages){
    try{
        await fs.promises.writeFile(path.join(__dirname,'/chat'), JSON.stringify(messages))
        console.log('guardado',path.join(__dirname,'/chat'))
    }catch(err){
        console.log('no se pudo guardar el chat', err)
    }

}
module.exports = {escribir}