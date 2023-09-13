
function verificar() {
    var idade = window.document.getElementById('idade')
    var i = Number(idade.value)
    var data = new Date()
    var ano = data.getFullYear()
    var res = window.document.getElementById('resultado')
    if ( idade.ariaValueMax.length == 0 || idade.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
}