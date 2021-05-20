var num = [5, 8, 2, 9, 3]
var n = num.length
//num.sort()
num.push(1)
num.indexOf()
console.log(num.indexOf(5))
/*
for(var c = 0; c < n; c++){
    console.log(`Elemento da posição ${c} é o ${num[c]}`)
}
*/
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}