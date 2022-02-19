// @ts-nocheck
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');

// @ts-ignore
const socket = io()


socket.on('connect', () => {
    // console.log('Conectado al servidor');

    lblOnline.style.display  = '';
    lblOffline.style.display = 'none';

})


socket.on('disconnect', () => {
    // console.log('Perdimos conexión con el servidor');
    
    lblOnline.style.display  = 'none';
    lblOffline.style.display = '';

})


socket.on('enviar-mensaje', (payload) => {

    console.log('Mensaje recibido', payload);
})

btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: 1,
        date: new Date().getTime()
    } 

    socket.emit('enviar-mensaje', payload, ( id ) => {
        console.log( 'desde el server', id );
    })
})