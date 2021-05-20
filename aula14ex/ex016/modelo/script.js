function contar(){
    var inicio = document.getElementById('txtinicio').value
    var fim = document.getElementById('txtfim').value
    var passo = document.getElementById('txtpasso').value
    var res = document.getElementById('res')

    if(!inicio || !fim || !passo){
        res.innerHTML = ('Impossível contar!')
    } else {
        res.innerHTML = "Contando: <br>"
        var i = Number(inicio)
        var f  = Number(fim)
        var p = Number(passo)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        } 
        if (i <= f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c}\u{1F449}`
            }
         } else {
                for(var c = i; c >= f; c -= p){
                    res.innerHTML += `${c}\u{1F449}`
                }
            }
           res.innerHTML += '\u{1F3C1}'	
        }
    }