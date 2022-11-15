const { Server } = require( "socket.io");
const logger = require('../utils/logger.js')
const ChatDaoFactory = require ('../classes/chat/ChatDaoFactory.class.js') 
const DAO = ChatDaoFactory.getDao()
const ProductoDaoFactory = require ('../classes/producto/ProductoDaoFactory.class.js') 
const ProductoDAO = ProductoDaoFactory.getDao()

// LADO SERVIDOR
async function configChatMongo(expressServer){
    const io = new Server(expressServer)
    //INGRESO DE PRODUCTOS - EN PROCESO - FALTAN ITEMS
    io.on('connection', async socket=>{
        console.log('se conecto un usuario')
        let chatproductos = await ProductoDAO.getAll()
        io.emit('serverSend:Products', chatproductos) 
        try {
            socket.on('client:enterProduct', async productInfo=>{
                try {
                    await ProductoDAO.create(productInfo)
                    chatproductos = await ProductoDAO.getAll()
                    
                } catch (error) {
                    console.log(error)
                }
                io.emit('serverSend:Products', chatproductos)
            })
        } catch (error) {
            logger.error('problema productos lado server', error)
        }
         //CHAT MENSAJES
        let chatmessages= await DAO.getAll()
        io.emit('serverSend:message',chatmessages)
        try {
            socket.on('client:message', async messageInfo=>{
                try {
                    await DAO.create({...messageInfo,type:"usuario"})
                    chatmessages = await DAO.getAll()    
                } catch (error) {
                    console.log(error)
                }               
                io.emit('serverSend:message', chatmessages)
            })
           
        } catch (error) {
            logger.error('problema chat lado server', error)
        }
 
    })
}
module.exports = {configChatMongo}