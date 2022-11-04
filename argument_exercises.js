const sum3 = function(args) {
    let sum = 0
    for(let i=0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
    // arguments.forEach(function(num) {
    //     sum += num
    // })
    // return sum
}

