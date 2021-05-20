function tabuada(){
var num = document.getElementById('txtn').value
var txts = document.getElementById('txts')
if(!num){
    alert('Por favor, digite um número!')
} else {
    var n = Number(num)
    txts.innerHTML = ''
    for(var c = 1; c <= 10; c++){
        var item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        txts.appendChild(item)
    }
}
}