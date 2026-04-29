// #region EJERCICIO 1

//   <input type="text" id="inputTexto" placeholder="Escribe algo">
//   <button id="btnAgregar">Añadir</button>

//   <ul id="lista"></ul>

    const input = document.getElementById("inputTexto");
    const boton = document.getElementById("btnAgregar");
    const lista = document.getElementById("lista");

    boton.addEventListener("click", function () {
      const texto = input.value.trim();

      // Evitar elementos vacíos
      if (texto === "") return;

      // Crear li
      const li = document.createElement("li");
      li.textContent = texto;

      // Crear botón eliminar
      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";

      // Evento eliminar
      btnEliminar.addEventListener("click", () => li.remove());

      // Añadir botón al li
      li.appendChild(btnEliminar);

      // Añadir li a la lista
      lista.appendChild(li);

      // Limpiar input
      input.value = "";
    });

// #endregion

// #region EJERCICIO 2

// <input type="text" id="inputAlerta" placeholder="Escribe un mensaje">
// <button id="btnAlerta">Mostrar alerta</button>

const inputAlerta = document.getElementById("inputAlerta");
const btnAlerta = document.getElementById("btnAlerta");

btnAlerta.addEventListener("click", () => {
  const mensaje = inputAlerta.value.trim();

  if (mensaje === "") return;

  setTimeout(() => alert(mensaje), 3000);
});

// #endregion

// #region EJERCICIO 3

// <input type="text" id="inputUrl" placeholder="https://...">
// <button id="btnIr">Ir a URL</button>

const inputUrl = document.getElementById("inputUrl");
const btnIr = document.getElementById("btnIr");

btnIr.addEventListener("click", function () {
  let url = inputUrl.value.trim();

  if (url === "") return;

  // Si el usuario no escribe protocolo, lo añadimos
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  // Abrir en nueva pestaña
  window.open(url);
});

// #endregion

// #region EJERCICIO 4

// <p id="mensaje">Bienvenido.</p>

const mensaje = document.getElementById("mensaje");

// Crear enlace
const enlace = document.createElement("a");
enlace.textContent = "Google";
enlace.href = "https://www.google.com";

// Añadir texto
mensaje.append("¿Quiere ir a ", enlace, "?")

// #endregion
