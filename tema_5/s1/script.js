// #region Obtención y modificación de elementos

function cambiarTexto() {
    const titulo = document.getElementById("titulo"); 
    titulo.textContent = "Texto título cambiado dinámicamente";
}

function cambiarTextoListado() {
    const lista = document.getElementById("lista"); 
    const elementos = lista.getElementsByTagName("li");
    console.log(lista.childNodes);
    for (const elemento of elementos) {
        elemento.textContent = "Texto elemento cambiado"
    }
}

function cambiarClase() {
    const titulo = document.getElementById("titulo");

    // if (titulo.classList.contains("resaltado")) {
    //     titulo.classList.remove("resaltado");
    // } else {
    //     titulo.classList.add("resaltado");
    // }    

    titulo.classList.toggle("resaltado");
}

function cambiarEstilo() {
    const titulo = document.getElementById("titulo"); 
    titulo.style.color = "blue";
    titulo.style.fontFamily = "Courier New";
} 

// #endregion 

// #region Obtención y modificación de atributos

function obtenerVersion() { 
    const titulo = document.getElementById("titulo"); 
    
    const version = titulo.dataset.version; 
    // const version = titulo.getAttribute("data-version"); 

    document.getElementById("resultadoAtributo").textContent = "Atributo data-version: " + version; 
}

function actualizacionVersion() { 
    const titulo = document.getElementById("titulo"); 
    const input = document.getElementById("input-version");

    const nuevaVersion = input.value;
    
    titulo.dataset.version = nuevaVersion; 
    // titulo.setAttribute("data-version", nuevaVersion);

    document.getElementById("resultadoAtributo").textContent = "Atributo data-version actualizado a: " + nuevaVersion; 
}

// #endregion

// #region Añadir eventos por el DOM

const btnAlerta = document.getElementById("alerta");

btnAlerta.addEventListener("click", (e) => {
    alert("Se ha pulsado el botón con id=" + e.target.id);
});

// #endregion

// #region Ejercicios

let cont = 0;

function ej1() {
    const contador = document.getElementById("contador-ej1");
    cont++;
    contador.textContent = "Contador: " + cont;
}

function ej2() {
    const input = document.getElementById("input-ej2");
    alert("Texto introducido: " + input.value);
}

function ej3() {
    const parrafo = document.getElementById("parrafo-ej3");
    alert()
}

function ej4() {
    
}

function ej5(boton) {
    const color = boton.getAttribute("data-color");
    alert("Color: " + color);
}

// #endregion