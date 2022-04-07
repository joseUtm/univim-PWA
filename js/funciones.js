/*Función para crear una nueva base de datos indexDB
recibimos el nombre de la base de datos a crear y el nombre de la tabla
Nota: Si requieres mas de una tabla debes generar dos funcines una para
crear la bd y otra cada tabla*/
const contactoDB=(nombrebd, tabla)=>{
    //Creando la bd con el nomvre recibido
    const bd=new Dexie(nombrebd);
    //Crea una tabla con el nombre recibido
    bd.version(1).stores(tabla);
    //Al crear una nueva bd se debe abrir
    bd.open();
    //retornamos el objeto db que dará acceso a base de datos
    return bd;

}


/*Función generica para insertar, recibe el nombre de la tabla
y los datos a guardar*/

const guardar=(tabla, datos)=>{
  /*emptu valida que los datos enviados no estan vacios o nulos
  flag recibe true si contienen datos y false si estan vacios*/
    let flag=empty(datos);
    //si hay datos para guardar
    if(flag){
        //la función bulkadd realiza una inserción en la tabla
        tabla.bulkAdd([datos]);
        console.log("inserción realizada")
    }
    else{//si algun campo esta vacio
        console.log("No puedes dajar campos vacios")
    }
  /*retornamos la bandera si es true se usará para 
  limpiar el formulario*/
   return flag;
    
}

const empty = object =>{
    let flag=false;
    //cada dato enviado del formulario se procesa
    for (const value in object){
        //si no nulo y contiene un valor
        if(object[value]!="" && object.hasOwnProperty(value)){
            //retornamos true para proceder con la insercion
            flag=true;
        }else{
            //retornamos true para enviar el error
            flag=false;
        }
    }
    //regresamos el valor que contenga flag (true o false)
    return flag;
}

export default contactoDB;
export {guardar};