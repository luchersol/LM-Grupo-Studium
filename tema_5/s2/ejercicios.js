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