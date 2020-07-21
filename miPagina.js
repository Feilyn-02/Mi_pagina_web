function texto_aleatorio() {
    var textos = new Array()
    textos[0] = "Watsapp: 809-897-0338"
    textos[1] = "Facebook: Feilyn Sencion"
    textos[2] = "Instagram: Feilyn_sencion_"
    textos[3] = "Twitter: feilyn02"
    textos[4] = "Linkedin: feilyn sencion"

    aleat = Math.random() * (textos.length)
    aleat = Math.floor(aleat)

    document.write(textos[aleat])
}
