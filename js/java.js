import {RegistrarU, ObtenerU, ActualizarU, EliminarU } from "./promesa.js";
window.addEventListener("load", ()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
    
    cargarDatos();
    document.getElementById("btnActualizar").addEventListener("click",actualizar)

})

const registrar = ()=>{
    let fNombre = document.getElementById("Nombre");
    let fApellido = document.getElementById("Apellido");
    let fAnio = document.getElementById("Anio");
    let fConocer = document.getElementById("Conocer");
    let fCorreo = document.getElementById("Correo");
    let fContraseña = document.getElementById("Contraseña");
    let fCContraseña = document.getElementById("CContraseña");
    let fGenero = document.getElementById("Genero");
    let fComentario = document.getElementById("Comentario");
    let fNoticias = document.getElementById("Noticias");
    let vNombre = fNombre.value;
    let vApellido = fApellido.value;
    let vAnio = fAnio.value;
    let vConocer= fConocer.value
    let vCorreo = fCorreo.value;
    let vContraseña = fContraseña.value;
    let vCContraseña = fCContraseña.value;
    let vGenero = document.querySelector("input[name='Genero']").value;
    let vComentario = fComentario.value;
    let vNoticias = fNoticias.checked;
    
    let objeto = {nombre:vNombre,apellido:vApellido,anio:vAnio,conocer:vConocer,correo:vCorreo,contraseña:vContraseña,ccontraseña:vCContraseña,genero:vGenero,comentario:vComentario,noticias:vNoticias}
    console.log(objeto)
    RegistrarU(objeto).then(()=>{
        alert("Se ha registrado con exito.")
        cargarDatos();
        }).catch((error)=>(
        console.log(error)
    ));

    
}


const cargarDatos = ()=>{
    ObtenerU().then((Usuarios)=> {
        console.log("c:");
        console.log(Usuarios)

        let estructura = ""
        Usuarios.forEach((u)=>{
            estructura += "<tr>"
            estructura += "<td>"+u.nombre+"<td>"
            estructura += "<td>"+u.apellido+"<td>"
            estructura += "<td>"+u.anio+"<td>"
            estructura += "<td>"+u.conocer+"<td>"
            estructura += "<td>"+u.correo+"<td>"
            estructura += "<td>"+u.contraseña+"<td>"
            estructura += "<td>"+u.ccontraseña+"<td>"
            estructura += "<td>"+u.genero+"<td>"
            estructura += "<td>"+u.comentario+"<td>"
            estructura += "<td>"+u.noticias+"<td>"
            estructura += "<td><button id='UPD"+u.id+"'>Actualizar</button></td>"
            estructura += "<td><button id='DEL"+u.id+"'>Eliminar</button></td>"
            estructura += "</tr>";
        })
        document.getElementById("cuerpotabla").innerHTML = estructura;
        Usuarios.forEach((u)=>{
            let elemento = document.getElementById("UPD"+u.id);
            elemento.addEventListener("click",()=>{
                document.getElementById("UPDnombre").value = u.nombre;
                document.getElementById("UPDapellido").value = u.apellido;
                document.getElementById("UPDanio").value = u.anio;
                document.getElementById("UPDconocer").value = u.conocer;
                document.getElementById("UPDcorreo").value = u.correo;
                document.getElementById("UPDcontraseña").value = u.contraseña;
                document.getElementById("UPDccontraseña").value = u.ccontraseña;
                document.getElementById("UPDgenero").value = u.genero;
                document.getElementById("UPDcomentario").value = u.comentario;
                document.getElementById("UPDnoticias").value = u.noticias;
                document.getElementById("btnActualizar").value = u.id;

            });
            let btnEliminar = document.getElementById("DEL"+u.id);
            btnEliminar.addEventListener("click",()=>{
                if(confirm("Estas seguro que deseas eliminar a: \n"+u.nombre+" "+u.apellido)){
                    console.log("Eliminado será entonces")
                    EliminarU(u.id).then(()=>{
                        alert("Ha sido eliminado")
                        cargarDatos();
                    }).catch((e)=>{
                        console.log(e);
                    })
                }else(
                    console.log("Operacion [Eliminar] Cancelada")
                )
            })
        })
    })
}


const actualizar = ()=>{
    let fNombre = document.getElementById("UPDnombre");
    let fApellido = document.getElementById("UPDapellido");
    let fAnio = document.getElementById("UPDanio");
    let fConocer = document.getElementById("UPDconocer");
    let fCorreo = document.getElementById("UPDcorreo");
    let fContraseña = document.getElementById("UPDcontraseña");
    let fCContraseña = document.getElementById("UPDccontraseña");
    let fGenero = document.getElementById("UPDgenero");
    let fComentario = document.getElementById("UPDcomentario");
    let fNoticias = document.getElementById("UPDnoticias");
    let vNombre = fNombre.value;
    let vApellido = fApellido.value;
    let vAnio = fAnio.value;
    let vConocer =fConocer.value
    let vCorreo = fCorreo.value;
    let vContraseña = fContraseña.value;
    let vCContraseña = fCContraseña.value;
    let vGenero = document.querySelector("input[name='Genero']").value;
    let vComentario = fComentario.value;
    let vNoticias = fNoticias.checked;
    
    let objeto = {nombre:vNombre,apellido:vApellido,anio:vAnio,conocer:vConocer,correo:vCorreo,contraseña:vContraseña,ccontraseña:vCContraseña,genero:vGenero,comentario:vComentario,noticias:vNoticias}
    let id = document.getElementById("btnActualizar").value


    document.getElementById("btnActualizar").disabled = "true";

    ActualizarU(objeto,id).then(()=>{
        alert("Se actualiza con exito")
        cargarDatos();
        document.getElementById("btnActualizar").disabled = "";

    }).catch((e)=>{
        console.log(e)
    }).finally(()=>{
        document.getElementById("btnActualizar").disabled = "";
    })







}
