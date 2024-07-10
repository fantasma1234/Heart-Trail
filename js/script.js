const body = document.querySelector("body");

body.addEventListener("mousemove", (event) => {
    //console.log(event.offsetX);
    const posX = event.offsetX
    const posY = event.offsetY
    const span = document.createElement('span')
    span.style.left = posX + 'px'
    span.style.top = posY + 'px'
    const tamanho = Math.random() * 100
    span.style.width = tamanho + 'px'
    span.style.height = tamanho + 'px'
    body.appendChild(span)
    setTimeout(() => {
        span.remove()
    }, 3000)
})