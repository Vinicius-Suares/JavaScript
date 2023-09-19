function contar() {
var inicio = document.getElementById('txtini')
var fim = document.getElementById('txtfim')
var passo = document.getElementById('txtpas')

var res = document.getElementById('res')

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] Faltam Dados!')
} else {
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (p === 0) {
        window.alert('[ERRO]Passo zero inexistente, considerando PASSO 1')
        var p = 1
    }
    res.innerHTML = 'Contando: '
    if (i < f) {
    while (i <= f) {
        res.innerHTML += `${i} &#x1F449;`
        var i = i + p
        }
    } else if (i > f) {
        while (i >= f) {
            res.innerHTML += `${i} &#x1F449;`
            var i = i - p
            }
    }
    res.innerHTML += `&#x1F3C1`
}
}