function calc() {
    var numero = document.getElementById('txtnum')
    var multpli = 1
    if (numero.value.length == 0) {
        window.alert = '[ERRO] Número inexistente'
    } else {
        var lista = ' '
    while (multpli <= 10) {
        var n = Number(numero.value)
        var m = Number(multpli.value)
        lista.innerHTML += `${n} x ${m} = ${n*m}`
        m++
    }
    }
}