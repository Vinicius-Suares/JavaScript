function contar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel Contar!'
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if ( i < f){
            for (var c = i; c<= f; c+= p) {
            res.innerHTML += `${c} &#x1F449;`}
        } else {
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} &#x1F449;`
            }
        }
        res.innerHTML += `&#x1F3C1`
    }

}