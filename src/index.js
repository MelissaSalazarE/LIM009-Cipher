// Capturando los html //


const seccionInicio = document.getElementById('seccion-inicio');
const seccionServicios = document.getElementById('seccion-servicios');
const seccionContacto = document.getElementById('seccion-contacto');
const seccionTestimonios = document.getElementById('seccion-testimonios');

const paginaInicio = document.getElementById('pagina-inicio');
const paginaServicio = document.getElementById('pagina-servicios');
const paginaContacto = document.getElementById('pagina-contacto');
const paginaTestimonio = document.getElementById('pagina-testimonios');

paginaInicio.style.display="block";
paginaServicio.style.display="none";
paginaContacto.style.display="none";
paginaTestimonio.style.display="none";


seccionInicio.addEventListener('click',() => {
    paginaInicio.style.display="block";
    paginaServicio.style.display="none";
    paginaContacto.style.display="none";
    paginaTestimonio.style.display="none"; 
});

seccionServicios.addEventListener('click',() => {
    paginaInicio.style.display="none";
    paginaServicio.style.display="block";
    paginaContacto.style.display="none";
    paginaTestimonio.style.display="none"; 
});
seccionContacto.addEventListener('click',() => {
    paginaInicio.style.display="none";
    paginaServicio.style.display="none";
    paginaContacto.style.display="block";
    paginaTestimonio.style.display="none"; 
});
seccionTestimonios.addEventListener('click',() => {
    paginaInicio.style.display="none";
    paginaServicio.style.display="none";
    paginaContacto.style.display="none";
    paginaTestimonio.style.display="block"; 
});

// Ahora haciendo la funcion cifrar //

const btnCipher = document.getElementById('btn-cifrar');
const message = document.getElementById('commentCifrar');
const codDes = document.getElementById('contraseñaCifrar');
const message1 = document.getElementById('commentCifrar');

const hacerClickCifrar = () => {
    const mensaje = message.value;
    const numero = parseInt(codDes.value);
    const newMessage1 = cipher.encode(numero, mensaje);
    message1.value = newMessage1;
}

btnCipher.addEventListener("click", hacerClickCifrar)

// Ahora haciendo la funcion de descifrar //

const btnCipher2 = document.getElementById('btn-descifrar');
const message2 = document.getElementById('commentdescifrar');
const codDes2 = document.getElementById('contraseñaDescifrar');
const message3 = document.getElementById('commentdescifrar');

const hacerClickDescifrar = () => {
    const mensaje = message2.value;
    const numero = parseInt(codDes2.value);
    const newMessage1 = cipher.decode(numero, mensaje);
    message3.value = newMessage1;
}

btnCipher2.addEventListener('click', hacerClickDescifrar);


//  Para el registro  //

// /* eslint-disable no-unused-vars */

// const comment = document.getElementById('coment')
// const author = document.getElementById('author')
// const email = document.getElementById('email')
// const url = document.getElementById('url')

const buttonClean = document.getElementById('submit')

buttonClean.addEventListener('click', () => {
    
    comment.value = '';
    author.value = '';
    email.value = '';
    url.value = '';
});

// /* eslint-enable no-unused-vars */