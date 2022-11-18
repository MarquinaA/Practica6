function escucharClickBotonLogin(){
    const botonLogin = document.querySelector("#btn-login")
    botonLogin.addEventListener("click",(_event)=> {
const correoInput = document.querySelector("[name='correo'")
const passwordInput = document.querySelector("[name='password'")

const query=`?correo=${ correoInput.value}&password=${passwordInput.value}`

    fetch('http://localhost:8080/gestor/login' + query)
    .then(response => response.json())
    .then(gestor => {
        console({gestor})
        localStorage.setItem("mi usuario",JSON.stringify(gestor))
        
    })
   
})
    }
    
    escucharClickBotonLogin()