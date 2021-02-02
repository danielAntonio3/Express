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

// ! PARA INICIAR EL SERVICIO CON EL COMANDO NODE INDEX.JS
// ! CON DEMON EL SERVIDOR CAMBIA CUANDO VE UN CAMBIO (NPM I NODEMO -D) npx nodemon archivo
// * CÓDIGO DE EXPRESS (NPM I EXPRESS)
// ! REQUIERE UN MODULO
const express = require('express');

// ! COMO SE INICIA UN SERVIDOR BÁSICO
// ! INICIAMOS EL SERVICIO
// ? APP ES NUESTRO SERVIDOR
const app = express();

//* MIDDLEWARE
/*
function logger(req, res, next) {
 console.log('Request received of middleware');
 next();
}*/

// ? PARA SABER LA RUTA DE LA PETICION
function logger(req, res, next){
    console.log(`Router received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}


// *-------------------------------------------------------------------------------------------------------------------

// ! PARA DECIRLE A EXPRESS QUE ENTIENDA CÓDIGO JSON
app.use(express.json());
app.use(logger);

// ! PARA INDICAR QUE PASO POR AQUI DE UNA RUTA
/*app.all('/user',(req,res,next)=>{
    console.log('Por aqui paso');
    next();
});*/


// ? RUTA CON GET
app.get('/user',(req,res)=>{
    // ? ENVIAR TEXTO
    //res.send('Hola');

    // ? ENVIAR JSON
    res.json({
        name: 'Daniel',
        lastName: 'Antonio',
        old: 22,
        year: 1998
    });
});


// ? RUTA CON POST RECIBIR DATOS Y ENVIAR A BASE DE DATOS
app.post('/user',(req,res) =>{
    console.log(req.body);
    res.send("PETICION POST");
});


// ? RUTA CON POST RECIBIR DATOS Y ENVIAR A BASE DE DATOS CON DATOS EN LA URI
app.post('/user/:id',(req,res) =>{
    console.log(req.body);
    res.send("PETICION POST");
});


// ? RUTA DE PUT ACTUALIZAR
app.put('/user/:id',(req,res) =>{
    console.log(req.body);
    res.send(`User: ${req.params.id} Actualizado`);
});


// ? RUTA DE DELETE ELIMINAR
app.delete('/user/:id',(req,res) =>{
    res.send(`User: ${req.params.id} Eliminado`);
});


// ? INICIAR EXPRESS
app.listen(3000,()=>{
    console.log('server listening on port 3000');
});



