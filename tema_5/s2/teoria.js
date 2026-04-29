// #region CREACIÓN DE NODOS

function agregarElemento() {
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = "Nuevo Elemento";

    const lista = document.getElementById("lista");
    lista.appendChild(nuevoLi);
    // lista.append(nuevoLi);
}

function editarTexto() {
    const texto = document.getElementById("texto-editable");

    // OPCIÓN 1: REEMPLAZAR TODO EL CONTENIDO
    texto.textContent = "Texto cambiado";
    
    // OPCIÓN 2: AÑADIR SIN REEMPLAZAR
        // texto.append(document.createElement("div"));
    // texto.textContent += " + añadido con textContent";

    // OPCIÓN 3: UTILIZAR LOS NODOS
    texto.append(" + añadido con append"); 
    // texto.append(document.createTextNode(" + añadido con append"))
}

// #endregion

// #region ELIMINACIÓN DE NODOS

function eliminarElemento() {
    const lista = document.getElementById("lista");
    const elementosHijos = lista.children;

    if (elementosHijos.length > 0) {
        lista.removeChild(lista.lastElementChild);
        // lista.lastElementChild.remove();
    }
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

function irAdelante() {
    history.forward();
    // history.go(1);
}

function irOtraPagina() {
    location.assign("extra.html");
    // location.href = "extra.html";
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