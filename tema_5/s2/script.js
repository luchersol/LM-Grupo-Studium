// #region CREACIÓN DE NODOS

function agregarElemento() {
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = "Nuevo elemento";

    const lista = document.getElementById("lista");
    lista.appendChild(nuevoLi);
}

// #endregion
// #region ELIMINACIÓN DE NODOS

function eliminarElemento() {
    const lista = document.getElementById("lista");

    if (lista.children.length > 0) {
        lista.removeChild(lista.lastElementChild);
    }
}

// #endregion
// #region OBJETOS DEL NAVEGADOR


function abrirVentana() {
    window.open("https://example.com");
}

function verLocation() {
    alert("URL actual: " + location.href);
}

function irAtras() {
    history.back();
}

function infoPantalla() {
    alert("Ancho: " + screen.width + " Alto: " + screen.height);
}


// #endregion
// #region SETTIMEOUT

function cambiarFondo() {
    document.body.style.backgroundColor = "lightblue";
}

function cambiarFondoConRetraso() {
    setTimeout(cambiarFondo, 2000);
}

// #endregion