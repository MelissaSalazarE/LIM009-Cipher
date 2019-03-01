// Ahora haciendo la funcion cifrar //

const btnCipher = document.getElementById('btn-cifrar');
const message = document.getElementById('commentCifrar');
const codDes = document.getElementById('contraseñaCifrar');
const message1 = document.getElementById('commentCifrar');

const hacerClickCifrar =()=> {
  let mensaje = message.value;
  let numero = parseInt(codDes.value);
  let newMessage = cipher.encode(numero,mensaje);
return message1.value = newMessage;
}

btnCipher.addEventListener("click",hacerClickCifrar)

// Ahora haciendo la funcion de descifrar //

const btnCipher2 = document.getElementById('btn-descifrar');
const message2 = document.getElementById('commentdescifrar');
const codDes2 = document.getElementById('contraseñaDescifrar');
const message3 = document.getElementById('commentdescifrar');

const hacerClickdescifrar =()=> {
    let mensaje = message2.value;
    let numero = parseInt(codDes2.value);
    let newMessage = cipher.decode(numero,mensaje);
    return message3.value = newMessage;
}

btnCipher2.addEventListener('click',hacerClickdescifrar)


// creando los botones : clean //

/* eslint-disable no-unused-vars */
const buttonClean = document.getElementById('clean');
const cleantext =() => {
    codDes.value = '';
    message.value = '';
    message2.value = '';
    codDes2.value = '';
}
buttonClean.addEventListener('click',cleantext) 

/* eslint-enable no-unused-vars */

// Para el html contacto //

/* eslint-disable no-unused-vars */
function obtenerdatos() {
    let comment =document.getElementById('comment').value;
    let author = document.getElementById('author').value;
    let email = document.getElementById('email').value;
    let submit = document.getElementById('submit').value;
    
    document.registro.commentObtenido.value = comment;
    document.registro.authorObtenido.value = author;
    document.registro.emailObtenido.value = email;
    document.registro.submitObtenido.value = submit;
}
/* eslint-enable no-unused-vars */