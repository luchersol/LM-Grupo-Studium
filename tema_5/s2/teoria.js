// #region CREACIÓN DE NODOS

function agregarElemento() {
    const nuevoLi = document.createElement("li");

    const lista = document.getElementById("lista");
    lista.appendChild(nuevoLi);
    // lista.append(nuevoLi);
}

function editarTexto() {
    const texto = document.getElementById("texto-editable");

    // OPCIÓN 1: REEMPLAZAR TODO EL CONTENIDO
    texto.textContent = "Hola ";
    
    // OPCIÓN 2: AÑADIR SIN REEMPLAZAR
    texto.append(document.createElement("div"));
    // texto.textContent += " + añadido con textContent";

    // OPCIÓN 3: UTILIZAR LOS NODOS
    texto.append(" + añadido con append"); 
    // texto.append(document.createTextNode("+ añadido con append"))
}

// #endregion

// #region ELIMINACIÓN DE NODOS

function eliminarElemento() {
    const lista = document.getElementById("lista");

    if (lista.children.length > 0) {
        lista.removeChild(lista.lastElementChild);
    }
}

function eliminarTexto() {
    const texto = document.getElementById("texto-borrable");

    texto.parentNode.removeChild(texto);
}

// #endregion

// #region OBJETOS DEL NAVEGADOR


function abrirVentana() {
    window.open("https://www.google.com");
    // open("https://www.google.com");
}

function verLocation() {
    alert("URL actual: " + location.href);
}

function irAtras() {
    history.back();
    // history.go(-1);
}

function idAdelante() {
    history.forward();
    // history.go(1);
}

function recargarPagina() {
    location.reload();
}

function infoPantalla() {
    alert(
        "Ancho total: " + screen.width + "\n" +
        "Alto total: " + screen.height + "\n" +
        "Titulo: " + document.title + "\n" +
        "Última modificación: " + document.lastModified
    );
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