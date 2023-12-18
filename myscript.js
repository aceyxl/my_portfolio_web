function sumar() {
    var kelvinInicial = parseFloat(document.getElementById("kelvinInicial").value);

    var miredShift = parseFloat(document.getElementById("gelatina").value);

    var kelvinFinal = 1000000 / (kelvinInicial + miredShift);

    kelvinFinal = kelvinFinal.toFixed(0)

    document.getElementById("resultado").innerText = "Grados Kelvin: " + kelvinFinal
}

