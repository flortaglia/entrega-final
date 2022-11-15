const { Server } = require( "socket.io");
const logger = require('../utils/logger.js')
const ChatDaoFactory = require ('../classes/chat/ChatDaoFactory.class.js') 
const DAO = ChatDaoFactory.getDao()
const ProductoDaoFactory = require ('../classes/producto/ProductoDaoFactory.class.js') 
const ProductoDAO = ProductoDaoFactory.getDao()

// LADO SERVIDOR
async function configChatMongo(expressServer, username){
    const io = new Server(expressServer)

    io.on('connection', async socket=>{
        console.log('se conecto un usuario')
        let chatproductos = await ProductoDAO.getAll()
        io.emit('serverSend:Products', chatproductos) //envio todos los productos
        try {
            socket.on('client:enterProduct', async productInfo=>{
                // productos.push(productInfo) 
                //recibo productos
                try {
                    await ProductoDAO.create(productInfo)
                    chatproductos = await ProductoDAO.getAll()
                    
                } catch (error) {
                    console.log(error)
                }
                io.emit('serverSend:Products', chatproductos)//emito productos recibidos a los usuarios
            })
        } catch (error) {
            logger.error('problema productos lado server', error)
        }
        // const userId = await fetchUserId(socket);
        
        socket.join(username);

        // TODO: solor traer los mensajes del usuario (username)
        let chatmessages= await DAO.getAll()
        // TODO: el canal/evento para enviar todos los mensajes deberia ser distinto al de enviar solo 1
        io.to(username).emit('serverSend:message',chatmessages)
        try {
            socket.on('client:message', async messageInfo=>{
                // messages.push(messageInfo) 
                //RECIBO mensaje y lo anido
                // escribir(messages)
                try {
                    await DAO.create({...messageInfo,type:"usuario"})
                    chatmessages = await DAO.getAll()    
                } catch (error) {
                    console.log(error)
                }
                // TODO: En este caso no enviaria todos los mensajes, sino solo el nuevo
                io.to(username).emit('serverSend:message', chatmessages)//EMITO CHATS
            })
           
        } catch (error) {
            logger.error('problema chat lado server', error)
        }
        
      
    })

}
module.exports = {configChatMongo}