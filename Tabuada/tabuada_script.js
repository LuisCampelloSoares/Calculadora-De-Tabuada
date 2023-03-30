function tabuada(){
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
    var n = Number(num.value)
    var e = Number(end.value)
    var r = ''
    var res = document.getElementById('resposta')
    var x = 0
    res.innerHTML = `A tabuada do ${n}  é: <br>`
    do{
        r = n*x
        res.innerHTML += `${n} X ${x} = ${r} <br>`
        x++
    } while (x <= e)
}   
