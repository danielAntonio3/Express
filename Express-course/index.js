/*
// * CODIGO SIN USAR EXPRESS

const http = require('http');

// ? CREAR UN SERVIDOR
const server = http.createServer((req,res) => {

    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');

});

// ! PARA INICIAR EL SERVICIO CON EL COMANDO NODE INDEX.JS
// ? CORRER EL SERVIDOR
server.listen(3000, () => {
    console.log('Server on port 3000');
});
*/
// * CÓDIGO DE EXPRESS
// ! REQUIERE UN MODULO
const express = require('express');

// ! COMO SE INICIA UN SERVIDOR BASICO
// ! INICIAMOS EL SERVICIO
// ? APP ES NUESTRO SERVIDOR
const app = express();

// ? DEVOLVER UNA PETICIÓN
app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.get('/about',(req,res) =>{
    res.send("About me");
})

// ? INICIAR EXPRESS
app.listen(3000,()=>{
    console.log('server listening on port 3000');
});


