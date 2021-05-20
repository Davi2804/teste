function fatorial(x){
    let v = 1
    for(let c = x; c > 1; c--){
        v *= c
    }
    return v
}
console.log(fatorial(5))