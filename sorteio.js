let res = document.querySelector('section#resultado')

function gerar() {
    let min = 1
    let max =  100
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)

    res.innerHTML = `<p>Acabei de pensar no número:<mark>${num}</mark>`
}

function limpar(){
    res.innerHTML = null
}