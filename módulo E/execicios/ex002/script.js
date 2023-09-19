function tabuada() {
    var numero = document.getElementById('txtnum')
    var res = document.getElementById('res')
    var tabuada = 1
    if (tabuada.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        var n = Number(numero.value)
        var resultado = n * tabuada
        while (tabuada <= 10) {
            res.innerHTML += `${n} x ${tabuada} = ${resultado}`
            tabuada++
        }
    }
}