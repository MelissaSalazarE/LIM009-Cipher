// Para el html contacto //
function obtenerdatos() {
    let comment =document.getElementById('comment').value;
    let author = document.getElementById('author').value;
    let email = document.getElementById('email').value;
    let submit = document.getElementById('submit').value;
    
    document.registro.commentObtenido.value = comment;
    document.registro.authorObtenido.value = author;
    document.registro.emailObtenido.value = email;
    document.registro.submitObtenido.value = submit;
};
// Ahora haciendo la funcion cifrar //

const btnCipher = document.getElementById('submit');
const message = document.getElementById('commentCifrar');
const codDes = document.getElementById('contraseñaCifrar');
const message1 = document.getElementById('commentCifrar');

function hacerClickCifrar() {
    let mensaje = message.value;
    let numero = parseInt(codDes.value);
    let newMessage = cipher.encode(numero,mensaje);
return message1.value = newMessage;
}

btnCipher.addEventListener("click",hacerClickCifrar)
