function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`
    if  (hora >= 0 && hora < 12 ) {
        //cedo
        img.src = 'cedo.png'
        document.body.style.background = '#e4a266'
    } else if ( hora >= 12 && hora < 18) {
        //tarde
        img.src = 'tarde.png'
        document.body.style.background = '#435051'
    } else {
        //noite
        img.src = 'noite.png'
        document.body.style.background = '#297184'
    }
}