import {RegistrarU, ObtenerU } from "./promesa.js";
window.addEventListener("load", ()=>{
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
    
    cargarDatos();
    

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
    let vGenero = fGenero.value;
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
        Usuarios.forEach((p)=>{
            let elemento = document.getElementById("UPD"+p.id);
            elemento.addEventListener("click",()=>{
                document.getElementById("UPDnombre").value = p.nombre;
                document.getElementById("UPDapellido").value = p.apellido;
                document.getElementById("UPDrut").value = p.rut;
                document.getElementById("UPDcorreo").value = p.correo;
                document.getElementById("UPDedad").value = p.edad;
                document.getElementById("UPDfnacimiento").value = p.fechanacimiento;
                document.getElementById("btnActualizar").value = p.id;

            });
            let btnEliminar = document.getElementById("DEL"+p.id);
            btnEliminar.addEventListener("click",()=>{
                if(confirm("Estas seguro que deseas eliminar a: \n"+u.nombre+" "+p.apellido)){
                    console.log("Eliminado sera entonces")
                    EliminarP(p.id).then(()=>{
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

