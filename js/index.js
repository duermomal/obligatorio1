const form = document.getElementById("formulario");


window.response = function () {    
    window.location.href = "principal.html";
}


form.addEventListener('submit', e =>{
    e.preventDefault();
    const email = document.getElementById("email");
    const contra = document.getElementById("contra");
    const alerta = document.getElementById("warning");
    if(email.value.length == 0 && contra.value.length == 0){
        alerta.innerHTML = `los campos no pueden ser vacíos.`;
        
    }
    else if(email.value.length == 0){
        alerta.innerHTML = `el email no puede ser vacío.`;
    }
    else if(contra.value.length == 0) {
        alerta.innerHTML = `la contraseña no puede ser vacía.`;
    }
    else {
        window.location = "principal.html";
    }


    
});