function carregar ()
{
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora <12){
    img.src = 'manhã.png'
    document.body.style.background = "#eae7e0"
} else if(hora >= 12 && hora <= 18){
    img.src = 'tarde.png'
    document.body.style.background = "#d97d4d"
} else {
    img.src = 'noite.png'
    document.body.style.background = "#212a2c"
}
}
    
    