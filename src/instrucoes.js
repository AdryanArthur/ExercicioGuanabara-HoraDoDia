function começar(){
    var msg = document.querySelector("#msg")
    var foto = document.querySelector("#foto")
    var data = new Date()
    msg.innerHTML = `Agora são ${data.getHours()}:${data.getMinutes().toString().padStart(2, "0")} horas no seu dispositivo.`

    if(data.getHours() > 5 && data.getHours() < 13){
        foto.src = "./imagens/bomdia.png"
        document.body.style.background = "#86a4ac"
    }else if(data.getHours() < 18){
        foto.src = "./imagens/boatarde.png"
        document.body.style.background = "#958a92"
    }else{
        foto.src = "./imagens/boanoite.png"
        document.body.style.background = "#102544"
    }
}