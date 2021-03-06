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

// ? PARA SABER LA RUTA DE LA URL MORGAN ES UN PAQUETE INSTALADO
const morgan = require('morgan');

// * SETTINGS ( CONFIGURACIONES)
// ? MOSTRAR EL NOMBRE DEL SERVICIO QUE LE DAMOS
// ! NOMBRE DE LA VARIABLE Y EL CONTENIDO
app.set('AppName','TUTORIAL DE EXPRESS');
app.set('port',3000);

app.set('view engine','ejs');
// *-------------------------------------------------------------------------------------------------------------------

//* MIDDLEWARE
/*
function logger(req, res, next) {
 console.log('Request received of middleware');
 next();
}*/

// ? PARA SABER LA RUTA DE LA PETICION
/*
function logger(req, res, next){
    console.log(`Router received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}*/

// ! PARA EJECUTAR EL MIDDLEWARE
//app.use(logger);

// *-------------------------------------------------------------------------------------------------------------------

// ! PARA DECIRLE A EXPRESS QUE ENTIENDA CÓDIGO JSON
app.use(express.json());


// ! MIDDLEWARE QUE IMPRIME EN CONSOLA LA RUTA DE LA PETICION
app.use(morgan('dev'));

// ! PARA INDICAR QUE PASO POR AQUÍ DE UNA RUTA
/*app.all('/user',(req,res,next)=>{
    console.log('Por aqui paso');
    next();
});*/

// * ROUTES

app.get('/',(req,res) => {
    const data = [{name: 'Daniel'},{name: 'Renato'},{name: 'Natalia'}];

    res.render('index.ejs',{personas: data});
});


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
// *-------------------------------------------------------------------------------------------------------------------

// * STATIC FILES
// ! ES PARA MOSTRAR CONTENIDO HTML Y EN EL PUEDE EJECUTAR COSAS DE CSS Y JS
app.use(express.static('public'));

// *-------------------------------------------------------------------------------------------------------------------

// ! DECLARAMOS EL PUERTO DONDE SE EJECUTARA EL SERVIDOR
// ? INICIAR EXPRESS
app.listen(app.set("port"),()=>{

    // ? MUESTRA EL NOMBRE QUE COLOCAMOS EN LOS SETTINGS
    console.log(app.get('AppName'));

    console.log(`server listening on port ${app.set("port")}`);
});



