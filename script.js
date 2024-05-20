/* Mi primer archivo de JS */

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Sarai giron torres')
    .pauseFor(1500)
    .deleteAll()
    .typeString('tejedora desde los 15')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante de programacion e idiomas</strong>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('amante de la pagina @marasycrochet')
    .pauseFor(1500)
    
    .start();