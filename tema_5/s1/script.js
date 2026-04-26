// #region ACCESO Y MODIFICACIÓN DEL DOM

function cambiarTexto() {
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Texto cambiado dinámicamente";
}

// #endregion
// #region ESTILOS + CLASES

function cambiarEstilo() {
    const titulo = document.getElementById("titulo");
    titulo.classList.toggle("resaltado");
}

// #endregion