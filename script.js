// S4MUEL EU T0 F4L4ND0 SÉR10, V41 EMB0R4 D4QU1 0U EU V0U EXPL0D1R SEU PC D:<

function confirmar(){
        if(resposta == '0413'){
            alert('H4HAHAHAHAHAHAHAHAH4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4HAHAHAHAH4H4H4H4HAHAHAHAH4H4H4HH4H4H4H4H4H4HAHAH4HAH4HAHAHAH4H4HAH4H4H4H4HAHAHAH4HAHH4H4H4H4HAHAHAH4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4H4HA')    
        } else if (resposta == ''){
            alert('Vc tem que Escrever Uma senha, esqueceu Como funciona?')    
        } else if (resposta == '666'){
            alert('😈')
        } else if (resposta == '69'){
            alert('😏')
        } else if (resposta == '67') {
            alert('È Serio qUe Vc achou Que essa seria a RESPOSTA do MEU Enigma?')
        } else if (resposta == '4536'){
            alert('HIH1HIHI Eu Sabia q vc ia Lembrar >:D')
            window.location = './M3ns4GEm.html'
        } else if (resposta == '6969'){
            alert('😏😏')
        } else if (resposta == '8') {
            alert('È o Melhor número, Né?')
        } else if (resposta == '6669'){
            alert('😈😏')
        }
    }

function gritar(oqEleDisse){
    alert(`Você profere "${oqEleDisse}" na frente da estatua...`)
    let resposta = padronizar(oqEleDisse)
    if(resposta == 'FELIZPARABENS'){
        alert(`... No momento em que você termina de falar, sangue começa a escorrer dos olhos e boca dela, mas antes que você tentasse qualquer outra coisa o chão abaixo dos seus pés se abre e você cai.
            
(P4R4B3NS, VOC3 4C3RTOU, É O GOAT NTJ 🤘)`)

            window.location = './3sp3r4 um 1nst4nt3.html'
    } else if(oqEleDisse == ''){
        alert(`... após alguns segundos, nada acontece ao seu redor mas você consegue ouvir algumas vozes murmurando. Parece que quem quer que esteja esperando sua resposta está agora bem confuso sobre como você coseguiu falar algo, mas não falar nada ao mesmo tempo.
            
            É doidera... (VOC3 3RROU)`)
    } else {
        alert(`... mas nada aconteceu.

(VOC3 3RROU)`)
    }
}

function escrever(textosAntigos){
    alert(`Você utiliza a Caneta Perpetua™ para escrever '${textosAntigos}' na pedra...`)
    let resposta = padronizar(textosAntigos)
    if(resposta == 'FELIZDIADOBOLO'){
        alert(`... instantaneamente após você terminar, as letras começam a se mover em circulos mudando aos poucos seu formato até eventualmente se juntarem formando um portal de lodo na superficie da pedra. Você, conhecendo bem o elemento, imagina que entrar num portal de lodo dificilmente resultará em algo bom.
Mas enquanto você tenta encontrar maneiras de evitar o abismo espiral à frente você sente algo puxando seu braço direito, e ao olhar para ele vê que sua mão já está dentro do portal. Confuso, você se pergunta como você acabou nessa situação? E é então que você percebe... A Caneta Perpétua™ te traiu...

Mas pelo menos, se tem uma coisa que você tem certeza sobre a M0RT3 é que tudo eventualmente chega ao fim, então só lhe resta esperar pra ver o que existe no fim disso... (AC3RTO M1Z3R4V1 >:D)`)

window.location = './enigma.html'
    } else if (resposta == ''){
        alert(`... você passa horas tentando escrever com perfeição, prestando atenção para desenhar precisamente cada traço para ter certeza que a pedra não entenderá errado, pois você está certo. A resposta só pode ser essa, é tão óbvio!
Como 3 pedras e uma Caneta Perpetua™ numa ilha poderiam significar outra coisa? Impossivel.
Obviamente o G3N1O que montou isso para você no seu aniversário pensou somente nisso. O mera ideia de existirem outras opções é algo que te confunde profundamente.

Você encara orgulhosamente a pedra vazia após ter escrito exatamente o que você queria dizer, mas a falta de reação da pedra (ou de qualquer coisa na ilha) começa a te fazer cojitar que talvez, por mais insana que seja a ideia, talvez essa não seja a resposta certa... (PÉÉÉÉÉ, 3RRADO)`)
    } else {
        alert(`... quando você termina de escrever, a pedra começa a vibrar, pequenos raios começam a sair dela e sua superficie começa a brilhar numa luz colorida, que muda de cor constantemente como um teclado gamer rgb.
Alguns segundos se passam e você vê a tinta da Caneta Perpetua™ secando e descascando por completo. Logo após isso, a pedra volta ao normal.

(PÉÉÉÉÉ, 3RRADO)`)
    }
}

function dick(puzzle, dica){
    if (puzzle == 1){
        if (dica == 1){
            window.open('https://open.spotify.com/intl-pt/album/1jzv3jwZbt8lYfEtMjiD1R', '_blank')
        } else {
            window.open('https://www.dcode.fr/tap-cipher', '_blank')
        }
    } else if (puzzle == 2){
        if (dica == 1){
            window.open('https://www.amazon.com.br/espiral-morte-Claudio-Angelo/dp/8535926852', '_blank')
        } else {
            window.open('https://www.dcode.fr/spiral-cipher', '_blank')
        }
    } else if (puzzle == 3){
        if (dica == 1){
            window.open('https://store.steampowered.com/app/1507580/Enigma_do_Medo/?l=brazilian', '_blank')
        } else {
            window.open('https://www.dcode.fr/enigma-machine-cipher', '_blank')
        }
    } else if (puzzle == 4){
        if (dica == 1){
            alert(`🌲⭐✋🦙🌠💔👓❓🧊☪️`)
        } else {
            window.open('https://www.dcode.fr/gravity-falls-colors', '_blank')
        }
    }

}

function padronizar(texto){
    let resposta = texto.toUpperCase()
    resposta = resposta.replaceAll(' ','')
    return resposta
}