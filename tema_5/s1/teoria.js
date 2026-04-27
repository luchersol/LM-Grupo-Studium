// #region Obtención y modificación de elementos

function cambiarTexto() {
    const titulo = document.getElementById("titulo"); 
    // const titulo = document.querySelector("#titulo");

    titulo.textContent = "Texto título cambiado dinámicamente";
}

function cambiarTextoListado() {
    const lista = document.getElementById("lista"); 
    const elementos = lista.getElementsByTagName("li");
    // const elementos = document.querySelectorAll("#lista li");

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
    titulo.style.fontFamily = "Courier New"; // font-family
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

