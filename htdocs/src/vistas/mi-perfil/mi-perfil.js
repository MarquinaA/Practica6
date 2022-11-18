
function getMiPerfil(){
    const usuarioGuardado = localStorage.getItem("miUsuario")
    if(usuarioGuardado==null){
        alert("No has iniciado sesión!")
    }else{
        const miUsuario =JSON.parse(usuarioGuardado)
        console.log({})
        const idGestor = 1;
    fetch('http://localhost:8080/gestor/' + idGestor)
        .then(response => response.json())
        .then(gestor => {
            const contenerdorUsername = document.getElementById("contenedor-username");
            contenerdorUsername.innerHTML = gestor.usuario;

            const contenerdorCorreo = document.getElementById("contenedor-correo");
            contenerdorCorreo.innerHTML = gestor.correo;
        })
    }
}

getMiPerfil();
function escucharClickLogout(){
    const botonLogout= document.getElementById("btn-logout")
    botonLogout.addEventListener("click", (_event)=>{
        localStorage.clear()
        alert("se a cerrado sesión")
    })
}

function cerrarSesion(){

}