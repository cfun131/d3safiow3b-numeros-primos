function verificar() {

    let numero =
        parseInt(
            document.getElementById("numero").value
        );

    let resultado =
        document.getElementById("resultado");

    let contador = 0;

    if (isNaN(numero) || numero <= 1) {

        resultado.innerHTML =
            "Ingrese un número válido mayor a 1";

        return;
    }

    for (let i = 1; i <= numero; i++) {

        if (numero % i == 0) {

            contador++;

        }

    }

    let dibujo = "";

    if (numero <= 20) {

        for (let j = 1; j <= numero; j++) {

            dibujo += "🔐";

        }

    } else {

        for (let j = 1; j <= 20; j++) {

            dibujo += "🔐";

        }

        dibujo +=
            " +" + (numero - 20);

    }

    if (contador == 2) {

        resultado.innerHTML =

            "<h2>Resultado:</h2>" +

            "<p>" +

            "El número " + numero +

            " ES primo 🔐" +

            "</p>" +

            "<br>" +

            "<p>" +

            "Puede representar una clave" +

            " básica más segura." +

            "</p>" +

            "<br>" +

            "<p>" +

            "Los números primos son utilizados" +

            " en criptografía porque son difíciles" +

            " de factorizar." +

            "</p>" +

            "<div class='hacker'>" +

            dibujo +

            "</div>";

    } else {

        resultado.innerHTML =

            "<h2>Resultado:</h2>" +

            "<p>" +

            "El número " + numero +

            " NO es primo ❌" +

            "</p>" +

            "<br>" +

            "<p>" +

            "No sería una buena opción" +

            " para una clave segura." +

            "</p>" +

            "<br>" +

            "<div class='hacker'>" +

            "💀💻"

            +

            "</div>";

    }

}