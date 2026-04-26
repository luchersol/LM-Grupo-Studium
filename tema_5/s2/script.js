// =============================
// CREACIÓN DE NODOS
// =============================

function agregarElemento() {
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = "Nuevo elemento";

    const lista = document.getElementById("lista");
    lista.appendChild(nuevoLi);
}

// =============================
// ELIMINACIÓN DE NODOS
// =============================

function eliminarElemento() {
    const lista = document.getElementById("lista");

    if (lista.children.length > 0) {
        lista.removeChild(lista.lastElementChild);
    }
}

// =============================
// OBJETOS DEL NAVEGADOR
// =============================

function mostrarAlert() {
    alert("Esto es un alert");
}

function mostrarConfirm() {
    const resultado = confirm("¿Te gusta JavaScript?");
    console.log("Respuesta:", resultado);
}

function mostrarPrompt() {
    const texto = prompt("Escribe algo:");
    console.log("Has escrito:", texto);
}

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

// =============================
// SETTIMEOUT
// =============================

function cambiarFondo() {
    document.body.style.backgroundColor = "lightblue";
}

function cambiarFondoConRetraso() {
    setTimeout(cambiarFondo, 2000);
}