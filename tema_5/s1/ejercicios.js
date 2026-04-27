// #region Ejercicio 1

// <p id="contador">Contador: 0</p>
// <button id="btnContar" onclick="contar">Incrementar</button>

let contador = 0;

document.getElementById("btnContar").addEventListener("click", function () {
    contador++;
    document.getElementById("contador").textContent = "Contador: " + contador;
});

// #endregion

// #region Ejercicio 2

// <input type="text" id="texto">
// <button id="btnMostrar">Mostrar texto</button>

document.getElementById("btnMostrar").addEventListener("click", function () {
    let valor = document.getElementById("texto").value;
    alert(valor);
});

// #endregion

// #region Ejercicio 3

// <button class="colorBtn" data-color="rojo">Rojo</button>
// <button class="colorBtn" data-color="azul">Azul</button>
// <button class="colorBtn" data-color="verde">Verde</button>

let botones = document.querySelectorAll(".colorBtn");

botones.forEach(function (btn) {
    btn.addEventListener("click", function () {
        alert("Color: " + this.dataset.color);
    });
});

// #endregion

// #region Ejercicio 4

// <ul id="lista">
//     <li>Elemento 1</li>
//     <li>Elemento 2</li>
//     <li>Elemento 3</li>
//     <li>Elemento 4</li>
//     <li>Elemento 5</li>
// </ul>

// <button id="btnColores">Cambiar colores</button>

const btnColores = document.getElementById("btnColores")

btnColores.addEventListener("click", () => {
    const lista = document.querySelectorAll("#lista li");

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];
        if(i % 2 === 0) {
            elemento.style.color = "blue";
        } else {
            elemento.style.color = "red";
        }
    }
});

// #endregion

// #region Ejercicio 5

<ul id="listaClick">
    <li>Manzana</li>
    <li>Pera</li>
    <li>Naranja</li>
    <li>Plátano</li>
</ul>

let elementos = document.querySelectorAll("#listaClick li");

elementos.forEach(function (item) {
    item.addEventListener("click", (e) => {
        alert(e.target.textContent);
    });
});

// #endregion