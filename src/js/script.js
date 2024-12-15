document.getElementById("sortear").addEventListener("click", function () {
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
    const opcoes = document.getElementById("opcoes").value;
    const listaResultados = document.getElementById("lista-resultados");

    listaResultados.innerHTML = "";

    if (min >= max) {
        alert("O valor mínimo deve ser menor que o máximo.");
        return;
    }

    let numerosSorteados = [];

    if (opcoes === "semRepetir") {
        let numerosPossiveis = [];
        for (let i = min; i <= max; i++) {
            numerosPossiveis.push(i);
        }

        for (let i = 0; i < quantidade && numerosPossiveis.length > 0; i++) {
            const indice = Math.floor(Math.random() * numerosPossiveis.length);
            numerosSorteados.push(numerosPossiveis.splice(indice, 1)[0]);
        }
    } else {
        for (let i = 0; i < quantidade; i++) {
            numerosSorteados.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
    }

    // Adiciona os números na lista <ul>
    numerosSorteados.forEach(function (numero) {
        const item = document.createElement("li");
        item.textContent = numero;
        listaResultados.appendChild(item);
    });
});
