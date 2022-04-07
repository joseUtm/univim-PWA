//obtnenemos la url del servidor 
var url=window.location.href;
// definimos que nuestro sw.js se encuentra en el repositorio
var ubicacionSw='/sketching/sw.js';

if (navigator.serviceWorker) {
/*para que nuestro proyecto siga funcionando en localhost 
como en el servidor realizaremos una validacion si la url 
contiene localhost la ruta es la local del proyecto, de lo contrario 
es la ruta de nuestro repositorio  */

    if (url.includes('localhost')){
        ubicacionSw='/sw.js';
    }
    navigator.serviceWorker.register(ubicacionSw);
}