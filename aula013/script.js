function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#fcd4a4'
    } else if (hora >= 12 && hora < 18) {
         //Boa Tarde!
        img.src = 'img/fototarde.png'
        document.body.style.background = '#ab756a'
    } else {
        //Boa Noite!
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#043474'
    }
}