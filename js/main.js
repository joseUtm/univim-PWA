import contactoDB, {guardar} from './funciones.js';

/*  SECCION PARA GUARDAR EL FORMULARIO DE CONTACTO */

let bd=contactoDB("Contacto", {contacto:`++id, email, nombre, tel, descripcion`});
const email = document.getElementById("email");
const nombre = document.getElementById("nombre");
const tel = document.getElementById("tel");
const descripcion = document.getElementById("descripcion");

const btGuardar=document.getElementById("guardar");

btGuardar.onclick=(evento)=>{
    console.log("Algo");
    let flag =guardar(bd.contacto, {
        email: email.value,
        nombre: nombre.value,
        tel: tel.value,
        descripcion: descripcion.value
    });
    if(flag){
        email.value = "";
        nombre.value = ""
        tel.value = "";
        descripcion.value = "";
    }
}

/* FIN SECCION PARA GUARDAR FORMULARIO DE CONTACTO */

