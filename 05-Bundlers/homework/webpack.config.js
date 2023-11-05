module.exports = {
    mode:'development',
    entry:'./browser/app.js',
    output:{
        path:__dirname + '/browser',
        filename:'bundle.js'
    }
}



/*
* mode -> quitamos la advertencia de la terminal
* entry -> el punto de arranque del programa
* output -> la salida, indica la unificación de módulos (donde creamos a bundle.js)
* path -> el directorio donde queremos ubicar nuestro bundle.js
* filename -> bautizamos el archivo que unificará los módulos.


*/