let jaFoi = []

function comecaTimer(){
    console.log('timer começou')
    let timer = setTimeout(() => {demora()}, 600000)
    console.log(timer)
}

function demora(){
    let random = '1'

    
    while(jaFoi.includes(random) == true){
        if(jaFoi.length < 3){
            random = (Math.random()*(3-2)+2).toFixed()
        } else if (jaFoi.length == 3){
            random = '4'
            break
        }
    }
    if(jaFoi.includes(random) == false){
        jaFoi.push(random)
    }
    if(random == 1){
        brincadeira.innerHTML = `<div class="barra"><p onclick="brincadeira.close()">X</p></div>
        <div><img src="BR1nc4d3R4S hihihiha/Risos.gif"><img src="BR1nc4d3R4S hihihiha/tea-time-twitch-emote.gif"></div>
        <audio id="audio" src="BR1nc4d3R4S hihihiha/HAHAH4HAH4H4H4HAHAHA4H4/T4 D3MOR4NDO 3M KKKKKKKKK.mp3"></audio>`
        brincadeira.open = true
        audio.play()
        console.log(jaFoi)
        dica.style.display = 'flex'
        setTimeout(() => {demora()}, 300000)
    } else if (random == 2){
        brincadeira.display = 'flex'
        brincadeira.innerHTML = `<div class="barra"><p onclick="brincadeira.close()">X</p></div>
        <img src="BR1nc4d3R4S hihihiha/3ITA D3MORA.png">
        <audio id="audio" src="BR1nc4d3R4S hihihiha/HAHAH4HAH4H4H4HAHAHA4H4/T4 D3MOR4NDO D3MA1S J4.mp3"></audio>`
        brincadeira.open = true
        audio.play()
        console.log(jaFoi)
        setTimeout(() => {demora()}, 300000)
    } else if (random == 3){
        brincadeira.innerHTML = `<div class="barra"><p onclick="brincadeira.close()">X</p></div>
        <img src="BR1nc4d3R4S hihihiha/3SP3R4NDO.png">
        <audio id="audio" src="BR1nc4d3R4S hihihiha/HAHAH4HAH4H4H4HAHAHA4H4/4 QU4LQU3R MOM3NTO.mp3"></audio>`
        brincadeira.open = true
        audio.play()
        console.log(jaFoi)
        setTimeout(() => {demora()}, 300000)
    } else {
        console.log(jaFoi)
        brincadeira.innerHTML = `<div class="barra"><p onclick="brincadeira.close()">X</p></div>
        <img src="BR1nc4d3R4S hihihiha/NAA4A4AAO.gif">
        <audio id="audio" src="BR1nc4d3R4S hihihiha/HAHAH4HAH4H4H4HAHAHA4H4/4C4B4 P3LO 4MOR D3 D3US.mp3"></audio>`
        brincadeira.open = true
        audio.play()
        return
    }
}