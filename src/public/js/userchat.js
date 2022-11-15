const socket = io() 
//Fecha
const tiempoTranscurrido = Date.now()
const hoy = new Date(tiempoTranscurrido)
const fecha= hoy.toLocaleDateString()
const tiempo = new Date()
const argHora=tiempo.toLocaleTimeString('it-IT')

//CHAT 
const id = document.querySelector('#idUsuario') //mail 
const messageInput = document.querySelector('#messageInput')
//VISTA CHAT
const totalMessages = document.querySelector('#totalMessages')

class UserChat{
    constructor(){
        this.bindEvents()
    }
    bindEvents(){
        // Lado cliente
        const socket = io() 
        const formChat = document.querySelector('#formChat')
        formChat.addEventListener('submit', event => {
            event.preventDefault()
            this.sendMessage()
            messageInput.value = "" 
        },true)
        // CAPTURO MENSAJES EMITIDOS AL SERVIDOR
        socket.on('serverSend:message', this.renderMessages);
    }
    sendMessage() {
        try {
            const mail = id.value
            const message = messageInput.value
            const tiempochat = `${fecha}, ${argHora}`
            console.log(tiempochat)
            // const roomName = "pabloRoom"
            // socket.join(username);
            socket.emit('client:message', {mail,message,tiempochat})
            // socket.emit('client:message', { mail, tiempochat, message }) //emito el mensaje al servidor
        } catch(error) {
            console.log(`Hubo un error ${error}`)
        }
    }
   
    renderMessages(messagesArray) {
        try {
            const html = messagesArray.map(messageInfo => {
                return(`<div>
                    <strong style="color: blue;" >${messageInfo.mail}</strong>[
                    <span style="color: brown;">${messageInfo.tiempochat}</span>]:
                    <em style="color: green;font-style: italic;">${messageInfo.message}</em> </div>`)
            }).join(" ");
    
            totalMessages.innerHTML = html
        } catch(error) {
            console.log(`Hubo un error ${error}`)
        }
    }
     
}
