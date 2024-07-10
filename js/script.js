const body = document.querySelector("body");

body.addEventListener("mousemove", (event) => {
    //console.log(event.offsetX);
    //pega a posição do mouse na tela
    const posX = event.offsetX
    const posY = event.offsetY
    const span = document.createElement('span')
    span.style.left = posX + 'px'
    span.style.top = posY + 'px'

    //muda o tamanho dos corações
    const tamanho = Math.random() * 100
    span.style.width = tamanho + 'px'
    span.style.height = tamanho + 'px'

    //adiciona o span dentro do body
    body.appendChild(span)

    //marca o tempo de duração do span, nesse caso 3s
    setTimeout(() => {
        span.remove()
    }, 3000)
})

body.addEventListener("touchstart", (event) => {
    event.preventDefault()
})

body.addEventListener("touchmove", (event) => {
    console.log(event);
    event.preventDefault();
    [...event.changedTouches].forEach(touch => {
        //pega a posição do dedo na tela
        const span = document.createElement('span')
        span.style.left = `${touch.pageX}px`
        span.style.top =  `${touch.pageY}px`
        span.id = touch.identifier

        //muda o tamanho dos corações
        const tamanho = Math.random() * 100
        span.style.width = tamanho + 'px'
        span.style.height = tamanho + 'px'

        //adiciona o span dentro do body
        body.appendChild(span)

        //marca o tempo de duração do span, nesse caso 3s
        setTimeout(() => {
            span.remove()
        }, 3000)
    })
})