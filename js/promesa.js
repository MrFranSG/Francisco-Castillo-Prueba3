import { db } from "./firebase.js";
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
export const RegistrarU = async(usuario)=>{
    const docRef = await addDoc(collection(db, "Usuarios"), usuario);;
}

export const ObtenerU = async()=>{
    //recuperar la base
    const ref = collection(db, "Usuarios");
    //recuperamos una captura de la bd
    const qSnap = await getDocs(ref);
    let listado = []
    qSnap.forEach((doc)=>{
        console.log(doc.data());
        listado.push({...doc.data(),id:doc.id})
    });
    console.log(listado);
    return listado;
}
export const ActualizarU = async(objeto,id)=>{
    const ref = doc(db, "Usuarios", id);
    await updateDoc(ref, objeto)


}
export const EliminarU = async(id)=>{
    const ref = doc(db, "Usuarios", id);
    await deleteDoc(ref);
}
